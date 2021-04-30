import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useContext, useMemo, useState} from 'react';
import {FlatList, StatusBar, StyleSheet, View} from 'react-native';
import {
  Appbar,
  Button,
  Dialog,
  List,
  Menu,
  Portal,
  RadioButton,
  Text,
  TouchableRipple,
  useTheme,
} from 'react-native-paper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PreferencesContext} from '../../App';
import {getComponents} from '../Assets/Data/Components';
import {IComponent} from '../Interfaces/IComponent';
import {ThemeType} from '../Types/ThemeType';

const DATA = getComponents();

type MenuComponentProps = {
  onThemeSelect: Function;
  onAboutSelect: Function;
};

const MenuComponent = ({onThemeSelect, onAboutSelect}: MenuComponentProps) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);

  return (
    <Menu
      visible={menuVisible}
      onDismiss={closeMenu}
      statusBarHeight={StatusBar.currentHeight}
      anchor={
        <Appbar.Action
          icon={'dots-vertical'}
          color={'#fff'}
          onPress={() => {
            openMenu();
          }}
        />
      }>
      <Menu.Item
        onPress={() => {
          closeMenu();
          onThemeSelect();
        }}
        title={'Theme'}
      />
      <Menu.Item
        onPress={() => {
          closeMenu();
          onAboutSelect();
        }}
        title={'About'}
      />
    </Menu>
  );
};

type ThemeDialogProps = {
  visible: boolean;
  onDismiss: any;
};

const ThemeDialog = ({visible, onDismiss}: ThemeDialogProps) => {
  const preferences = useContext(PreferencesContext);

  const [selectedThemeValue, setSelectedThemeValue] = useState<ThemeType>(
    preferences.currentTheme,
  );

  console.log(selectedThemeValue);

  const themes = useMemo(() => {
    return ['System', 'Light', 'Dark'];
  }, []);

  const getStatus = useCallback(
    (themeValue) => {
      return selectedThemeValue == themeValue ? 'checked' : 'unchecked';
    },
    [selectedThemeValue],
  );

  return (
    <Portal>
      <Dialog visible={visible} onDismiss={onDismiss}>
        <Dialog.Title>Theme</Dialog.Title>
        <Dialog.Content>
          {themes.map((theme) => {
            const value = theme.toLowerCase();
            return (
              <TouchableRipple
                key={value}
                onPress={() => setSelectedThemeValue(value as ThemeType)}>
                <View style={styles.row}>
                  <RadioButton
                    value={value}
                    onPress={() => setSelectedThemeValue(value as ThemeType)}
                    status={getStatus(value)}
                  />
                  <Text>{theme}</Text>
                </View>
              </TouchableRipple>
            );
          })}
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={onDismiss}>CANCEL</Button>
          <Button
            onPress={() => {
              preferences.changeTheme(selectedThemeValue);
              AsyncStorage.setItem('@theme', selectedThemeValue!!.toString());
              onDismiss(selectedThemeValue);
            }}>
            OK
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

type AboutDialogProps = {
  visible: boolean;
  onDismiss: any;
};

const AboutDialog = ({visible, onDismiss}: AboutDialogProps) => {
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={onDismiss}>
        <Dialog.Title>About</Dialog.Title>
        <Dialog.Content>
          <Text>
            React Native Paper Gallery is a showcase app to display Paper
            Components.
          </Text>

          <View
            style={{
              alignItems: 'flex-start',
              paddingTop: 16,
            }}>
            <Button
              icon={'github'}
              style={{marginVertical: 4}}
              mode={'contained'}
              onPress={() => {}}>
              Source
            </Button>
            <Button
              icon={'text-box-multiple'}
              style={{marginVertical: 4}}
              mode={'contained'}
              onPress={() => {}}>
              Documentation
            </Button>
          </View>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={onDismiss}>OK</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

const ListScreen = () => {
  const insets = useSafeAreaInsets();
  const theme = useTheme();

  const navigation = useNavigation();

  const [aboutDialogVisible, setAboutDialogVisible] = useState(false);
  const showAboutDialog = () => setAboutDialogVisible(true);
  const hideAboutDialog = () => {
    setAboutDialogVisible(false);
  };

  const [themeDialogVisible, setThemeDialogVisible] = useState(false);
  const showThemeDialog = () => setThemeDialogVisible(true);
  const hideThemeDialog = () => {
    setThemeDialogVisible(false);
  };

  const _itemSeparatorComponent = () => {
    return <View style={styles.separator}></View>;
  };

  const _renderItem = ({item, index}: {item: IComponent; index: number}) => {
    return (
      <List.Item
        title={item.title}
        onPress={() => {
          navigation.navigate('Detail', {
            name: item.name,
          });
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: theme.colors.primary,
          paddingTop: insets.top,
        }}>
        <StatusBar
          barStyle={'light-content'}
          translucent={true}
          backgroundColor={'#00000033'}
        />
        <Appbar.Header
          style={{
            backgroundColor: theme.colors.primary,
            elevation: 0,
          }}>
          <Appbar.Content title={'Components'}></Appbar.Content>
          <MenuComponent
            onThemeSelect={showThemeDialog}
            onAboutSelect={showAboutDialog}
          />
        </Appbar.Header>
      </View>
      <View style={styles.content}>
        <FlatList<IComponent>
          data={DATA}
          keyExtractor={(item, index) => String(index)}
          renderItem={_renderItem}
          ItemSeparatorComponent={_itemSeparatorComponent}
          contentContainerStyle={{
            paddingBottom: insets.bottom,
          }}
        />
      </View>

      <AboutDialog visible={aboutDialogVisible} onDismiss={hideAboutDialog} />
      <ThemeDialog visible={themeDialogVisible} onDismiss={hideThemeDialog} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  separator: {
    padding: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
  },
});

export default ListScreen;
