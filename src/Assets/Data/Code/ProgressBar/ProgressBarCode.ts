const ProgressBarCode = () => `import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ProgressBar} from 'react-native-paper';

const ProgressBarDemo = () => {
  return (
    <View style={styles.container}>
      <ProgressBar progress={0.3} visible={true} />
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

export default ProgressBarDemo;
`;

export default ProgressBarCode