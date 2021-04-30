const FlatButtonCode = () => `import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-paper';

const FlatButtonDemo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Button onPress={() => {}}>Default</Button>
      </View>
      <View style={styles.row}>
        <Button icon={'home'} onPress={() => {}}>
          Icon
        </Button>
      </View>
      <View style={styles.row}>
        <Button loading={true} onPress={() => {}}>
          Loading
        </Button>
      </View>
      <View style={styles.row}>
        <Button disabled={true} onPress={() => {}}>
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
    margin: 16,
  },
});

export default FlatButtonDemo;
`;

export default FlatButtonCode