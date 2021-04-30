const TextButtonCode = () => `import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, useTheme} from 'react-native-paper';

const TextButtonDemo = () => {
  const {colors} = useTheme();

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
    margin: 8,
  },
});

export default TextButtonDemo;
`;

export default TextButtonCode