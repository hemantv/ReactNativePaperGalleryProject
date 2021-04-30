import Clipboard from '@react-native-community/clipboard';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {
  createElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  Animated,
  LayoutChangeEvent,
  Linking,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {
  ActivityIndicator,
  Appbar,
  Button,
  RadioButton,
  Snackbar,
  Subheading,
  Surface,
  Text,
  Title,
  TouchableRipple,
  useTheme,
} from 'react-native-paper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import {atomDark, prism} from 'react-syntax-highlighter/styles/prism';
import {getComponent} from '../Assets/Data/Components';
import {IOption} from '../Interfaces/IOption';
import {RootStackParamList} from '../Types/RootStackParamList';

type OptionPanelProps = {
  options: IOption[];
  selectedValue: string;
  onSelect: any;
};

const OptionPanel = ({options, selectedValue, onSelect}: OptionPanelProps) => {
  const getStatus = useCallback(
    (value) => {
      return value == selectedValue ? 'checked' : 'unchecked';
    },
    [selectedValue],
  );

  return (
    <View style={optionStyles.container}>
      <Title style={optionStyles.title}>Options</Title>
      <View style={optionStyles.content}>
        {options.map((option) => {
          const value = option.value;
          return (
            <TouchableRipple key={value} onPress={() => onSelect(value)}>
              <View style={optionStyles.row}>
                <RadioButton
                  value={value}
                  status={getStatus(value)}
                  onPress={() => onSelect(value)}
                />
                <Text>{option.name}</Text>
              </View>
            </TouchableRipple>
          );
        })}
      </View>
    </View>
  );
};

const optionStyles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  title: {
    paddingHorizontal: 16,
  },
  content: {
    paddingTop: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
});

type InfoPanelProps = {
  title: string;
  description: string;
};

const InfoPanel = ({title, description}: InfoPanelProps) => {
  return (
    <View style={infoStyles.container}>
      <Title>{title}</Title>
      <Subheading>{description}</Subheading>
    </View>
  );
};

const infoStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
});

type CodePanelProps = {
  code: string;
  onCopy: any;
};

const CodePanel = ({code, onCopy}: CodePanelProps) => {
  const theme = useTheme();

  const [syntaxLoaded, setSyntaxLoaded] = useState(false);

  const highlighterTheme = theme.dark ? atomDark : prism;

  useEffect(() => {
    setTimeout(() => {
      setSyntaxLoaded(true);
    }, 500);
    return () => {
      setSyntaxLoaded(false);
    };
  }, []);

  return (
    <View style={codeStyles.container}>
      <View
        style={[
          codeStyles.content,
          {
            backgroundColor: theme.colors.surface,
          },
        ]}>
        <Button
          mode={'contained'}
          color={theme.colors.accent}
          style={codeStyles.copyAllButton}
          onPress={() => {
            Clipboard.setString(code);
            onCopy();
          }}>
          Copy All
        </Button>
        {syntaxLoaded ? (
          <SyntaxHighlighter
            customStyle={{
              padding: 0,
              margin: 0,
              backgroundColor: theme.colors.surface,
            }}
            language={'tsx'}
            highlighter={'prism'}
            style={highlighterTheme}>
            {code}
          </SyntaxHighlighter>
        ) : (
          <View style={codeStyles.loadingContainer}>
            <ActivityIndicator />
          </View>
        )}
      </View>
    </View>
  );
};

const codeStyles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 16,
    maxHeight: '100%',
  },
  copyAllButton: {
    alignSelf: 'flex-start',
    marginBottom: 16,
  },
  loadingContainer: {
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

type DetailScreenNavigationProp = RouteProp<RootStackParamList, 'Detail'>;

enum ComponentPanel {
  None = -1,
  Option = 0,
  Info = 1,
  Code = 2,
}

const DetailScreen = () => {
  const route = useRoute<DetailScreenNavigationProp>();
  const {name} = route.params;

  const insets = useSafeAreaInsets();
  const theme = useTheme();

  const navigation = useNavigation();

  const [clipboardSnackbarVisible, setClipboardSnackbarVisible] = useState(
    false,
  );

  const onToggleSnackBar = () =>
    setClipboardSnackbarVisible(!clipboardSnackbarVisible);

  const onDismissSnackBar = () => setClipboardSnackbarVisible(false);

  const [selectedPanel, setSelectedPanel] = useState<ComponentPanel>(
    ComponentPanel.None,
  );
  const panelHeightAnim = useRef(new Animated.Value(0)).current;

  const onPanelLayout = (event: LayoutChangeEvent) => {
    const translateY = event.nativeEvent.layout.height;
    Animated.timing(panelHeightAnim, {
      toValue: translateY,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const togglePanel = (panel: ComponentPanel) => {
    if (selectedPanel == panel) {
      setSelectedPanel(ComponentPanel.None);
    } else {
      setSelectedPanel(panel);
    }
  };

  const component = getComponent(name);
  const [value, setValue] = React.useState(component.options[0].value);

  const demo = component.options.find((option) => option.value == value)!;

  const openDocumentation = useCallback(() => {
    Linking.openURL(component.documentationUrl);
  }, []);

  const getPanelColor = useCallback(
    (panel: ComponentPanel) => {
      return panel == selectedPanel ? theme.colors.accent : theme.colors.text;
    },
    [selectedPanel, theme.dark],
  );

  const statusBarTheme = theme.dark ? 'light-content' : 'dark-content';

  const getPanelContent = () => {
    switch (selectedPanel) {
      case ComponentPanel.Option:
        return (
          <OptionPanel
            options={component.options}
            selectedValue={value}
            onSelect={(newValue: string) => {
              setValue(newValue);
            }}
          />
        );
      case ComponentPanel.Info:
        return (
          <InfoPanel
            title={component.title}
            description={component.description}
          />
        );
      case ComponentPanel.Code:
        return (
          <CodePanel
            code={demo.code}
            onCopy={() => {
              onToggleSnackBar();
            }}
          />
        );
    }
  };

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
        },
      ]}>
      <View>
        <StatusBar
          barStyle={statusBarTheme}
          translucent={true}
          backgroundColor={'#00000033'}
        />
        <Appbar.Header
          style={{
            backgroundColor: theme.colors.background,
            elevation: 0,
          }}>
          <Appbar.BackAction onPress={() => navigation.goBack()} />
          <Appbar.Content title={''} />
          {component.options.length > 1 && (
            <Appbar.Action
              icon={'tune'}
              color={getPanelColor(ComponentPanel.Option)}
              onPress={() => {
                togglePanel(ComponentPanel.Option);
              }}
            />
          )}
          <Appbar.Action
            icon={'information'}
            color={getPanelColor(ComponentPanel.Info)}
            onPress={() => {
              togglePanel(ComponentPanel.Info);
            }}
          />
          <Appbar.Action
            icon={'code-tags'}
            color={getPanelColor(ComponentPanel.Code)}
            onPress={() => {
              togglePanel(ComponentPanel.Code);
            }}
          />
          <Appbar.Action
            icon={'text-box-multiple'}
            onPress={() => {
              openDocumentation();
            }}
          />
        </Appbar.Header>
      </View>
      <View style={styles.panelContainer}>
        <View onLayout={onPanelLayout} style={styles.panel}>
          {getPanelContent()}
        </View>
        <Animated.View
          style={[
            styles.collapsible,
            {
              paddingBottom: insets.bottom + 16,
              transform: [
                {
                  translateY: panelHeightAnim,
                },
              ],
            },
          ]}>
          <Surface style={[styles.demoContainer]}>
            <Appbar style={styles.demoAppbar}>
              <Appbar.Content title={demo.name} />
            </Appbar>
            <View style={styles.demoContent}>
              {createElement(demo.component)}
            </View>
          </Surface>
        </Animated.View>
      </View>
      <Snackbar
        visible={clipboardSnackbarVisible}
        onDismiss={onDismissSnackBar}
        duration={3000}>
        Copied to clipboard!
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  demoContainer: {
    flex: 1,
    elevation: 2,
    borderRadius: 8,
  },
  demoAppbar: {
    borderTopStartRadius: 8,
    borderTopEndRadius: 8,
  },
  demoContent: {
    flex: 1,
  },
  panelContainer: {
    flex: 1,
  },
  panel: {
    maxHeight: '80%',
  },
  collapsible: {
    paddingHorizontal: 16,
    marginBottom: 16,
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
  },
});

export default DetailScreen;
