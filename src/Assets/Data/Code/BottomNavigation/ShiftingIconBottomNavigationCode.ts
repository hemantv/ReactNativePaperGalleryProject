const ShiftingIconBottomNavigationCode = () => `import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {BottomNavigation, Text} from 'react-native-paper';

const MusicRoute = () => {
  return (
    <View style={styles.container}>
      <Text>Music</Text>
    </View>
  );
};

const AlbumsRoute = () => {
  return (
    <View style={styles.container}>
      <Text>Albums</Text>
    </View>
  );
};

const RecentsRoute = () => {
  return (
    <View style={styles.container}>
      <Text>Recents</Text>
    </View>
  );
};

const ShiftingBottomNavigationDemo = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'music', title: 'Music', icon: 'music'},
    {key: 'albums', title: 'Albums', icon: 'album'},
    {key: 'recents', title: 'Recents', icon: 'history'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
  });

  return (
    <BottomNavigation
      shifting={true}
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ShiftingBottomNavigationDemo;
`;

export default ShiftingIconBottomNavigationCode