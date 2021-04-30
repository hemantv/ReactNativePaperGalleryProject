import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Avatar} from 'react-native-paper';

const TextAvatarDemo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Avatar.Text label="XD" />
      </View>
      <View style={styles.row}>
        <Avatar.Text size={80} label="XD" />
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

export default TextAvatarDemo;
