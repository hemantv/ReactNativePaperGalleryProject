const OutlinedButtonCode = () => `import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, useTheme} from 'react-native-paper';

const OutlinedButtonDemo = () => {
  const {colors} = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Button mode={'outlined'} onPress={() => {}}>
          Default
        </Button>
      </View>
      <View style={styles.row}>
        <Button icon={'home'} mode={'outlined'} onPress={() => {}}>
          Icon
        </Button>
      </View>
      <View style={styles.row}>
        <Button loading={true} mode={'outlined'} onPress={() => {}}>
          Loading
        </Button>
      </View>
      <View style={styles.row}>
        <Button disabled={true} mode={'outlined'} onPress={() => {}}>
          Disabled
        </Button>
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
    margin: 8,
  },
});

export default OutlinedButtonDemo;
`;

export default OutlinedButtonCode