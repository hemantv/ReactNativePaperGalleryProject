import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Avatar} from 'react-native-paper';

const ImageAvatarDemo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Avatar.Image source={require('../../../Icon/avatar.png')} />
      </View>
      <View style={styles.row}>
        <Avatar.Image size={80} source={require('../../../Icon/avatar.png')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    margin: 16,
  },
});

export default ImageAvatarDemo;
