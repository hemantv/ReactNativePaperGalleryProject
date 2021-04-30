import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Drawer, Text} from 'react-native-paper';

const {Navigator, Screen} = createDrawerNavigator();

const ToggleButton = () => {
  const navigation = useNavigation();

  return (
    <Button
      style={styles.toggleButton}
      mode={'contained'}
      onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
      Toggle Drawer
    </Button>
  );
};

const MusicScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Music</Text>
      <ToggleButton />
    </View>
  );
};

const AlbumScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Albums</Text>
      <ToggleButton />
    </View>
  );
};

const RecentsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Recents</Text>
      <ToggleButton />
    </View>
  );
};

const DrawerDemo = () => {
  const navigation = useNavigation();
  const [activeRoute, setActiveRoute] = useState('Music');

  const setRoute = (routeName: string) => {
    setActiveRoute(routeName);
  };

  useEffect(() => {
    navigation.dispatch(DrawerActions.jumpTo(activeRoute));
  }, [activeRoute]);

  return (
    <Navigator
      initialRouteName={activeRoute}
      drawerContent={() => {
        return (
          <>
            <Drawer.Section title={'Library'}>
              <Drawer.Item
                label={'Music'}
                active={activeRoute == 'Music'}
                onPress={() => setRoute('Music')}></Drawer.Item>
              <Drawer.Item
                label={'Albums'}
                active={activeRoute == 'Albums'}
                onPress={() => setRoute('Albums')}></Drawer.Item>
            </Drawer.Section>
            <Drawer.Item
              label={'Recents'}
              active={activeRoute == 'Recents'}
              onPress={() => setRoute('Recents')}></Drawer.Item>
          </>
        );
      }}>
      <Screen component={MusicScreen} name={'Music'} />
      <Screen component={AlbumScreen} name={'Albums'} />
      <Screen component={RecentsScreen} name={'Recents'} />
    </Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  toggleButton: {
    margin: 16,
  },
});

export default DrawerDemo;
