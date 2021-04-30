import {useNavigation, useTheme} from '@react-navigation/native';
import React, {createElement, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  ActivityIndicator,
  Appbar,
  Colors,
  RadioButton,
  Subheading,
  Text,
  Title,
} from 'react-native-paper';
import getComponent from '../../Assets/Data/Components';
import {Collapsible} from '../../Components/CollapsibleComponent';
import {Content} from '../../Components/ContentComponent';
import {Row} from '../../Components/RowComponent';

const Default = () => {
  return <ActivityIndicator animating={false} />;
};

const Color = () => {
  return <ActivityIndicator animating={true} color={Colors.red800} />;
};

const Large = () => {
  return <ActivityIndicator animating={true} size={'large'} />;
};

const Size = () => {
  return <ActivityIndicator animating={false} size={100} />;
};

const ActivityIndicatorScreen = () => {
  const navigation = useNavigation();
  const theme = useTheme();

  const [value, setValue] = React.useState('default');
  const [selectedPanel, setSelectedPanel] = useState(-1);

  const component = getComponent('ActivityIndicator');

  const getContent = () => {
    switch (selectedPanel) {
      case 0:
        return (
          <View style={styles.option}>
            <Title>Options</Title>
            <RadioButton.Group
              onValueChange={(newValue) => {
                setValue(newValue);
              }}
              value={value}>
              {component.options.map((option) => {
                return (
                  <Row key={option.value}>
                    <RadioButton value={option.value} />
                    <Text>{option.name}</Text>
                  </Row>
                );
              })}
            </RadioButton.Group>
          </View>
        );
      case 1:
        return (
          <View style={styles.option}>
            <Title>{component.name}</Title>
            <Subheading>{component.description}</Subheading>
          </View>
        );
    }
  };

  const demo = component.options.find((option) => option.value == value)!!
    .component;

  return (
    <View style={styles.container}>
      <View>
        <Appbar.Header
          style={{
            backgroundColor: theme.colors.background,
            elevation: 0,
          }}>
          <Appbar.BackAction onPress={() => navigation.goBack()} />
          <Appbar.Content title="" />
          <Appbar.Action
            icon={'tune'}
            onPress={() => {
              if (selectedPanel == 0) {
                setSelectedPanel(-1);
              } else {
                setSelectedPanel(0);
              }
            }}
          />
          <Appbar.Action
            icon={'information'}
            onPress={() => {
              if (selectedPanel == 1) {
                setSelectedPanel(-1);
              } else {
                setSelectedPanel(1);
              }
            }}
          />
          <Appbar.Action icon={'code-tags'} onPress={() => {}} />
          <Appbar.Action icon={'text-box-multiple'} onPress={() => {}} />
        </Appbar.Header>
      </View>

      <View>
        <Collapsible collapsibleChildren={getContent()}>
          <Appbar style={styles.appbar}>
            <Appbar.Content title={component.name} />
          </Appbar>
          <Content>{createElement(demo)}</Content>
        </Collapsible>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  component: {
    borderRadius: 8,
  },
  appbar: {
    borderTopStartRadius: 8,
    borderTopEndRadius: 8,
  },
  option: {
    padding: 8,
  },
});

export default ActivityIndicatorScreen;
