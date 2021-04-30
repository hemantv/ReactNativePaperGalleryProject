const ActivityIndicatorCode = () => `import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';

const ActivityIndicatorDemo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <ActivityIndicator animating={true} />
      </View>
      <View style={styles.row}>
        <ActivityIndicator animating={true} size={'large'} />
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

export default ActivityIndicatorDemo;
`;

export default ActivityIndicatorCode