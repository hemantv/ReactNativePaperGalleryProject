import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ProgressBar} from 'react-native-paper';

const IndeterminateProgressBarDemo = () => {
  return (
    <View style={styles.container}>
      <ProgressBar indeterminate={true} visible={true} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
});

export default IndeterminateProgressBarDemo;
