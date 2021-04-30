import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, TouchableRipple} from 'react-native-paper';

const TouchableRippleDemo = () => {
  return (
    <TouchableRipple
      style={styles.container}
      onPress={() => {}}
      rippleColor="rgba(0, 0, 0, .32)">
      <Text>Press anywhere</Text>
    </TouchableRipple>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TouchableRippleDemo;
