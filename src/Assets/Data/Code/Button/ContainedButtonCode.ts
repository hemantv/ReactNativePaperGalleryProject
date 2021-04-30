const ContainedButtonCode = () => `import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, useTheme} from 'react-native-paper';

const ContainedButtonDemo = () => {
  const {colors} = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Button mode={'contained'} onPress={() => {}}>
          Default
        </Button>
      </View>
      <View style={styles.row}>
        <Button icon={'home'} mode={'contained'} onPress={() => {}}>
          Icon
        </Button>
      </View>
      <View style={styles.row}>
        <Button loading={true} mode={'contained'} onPress={() => {}}>
          Loading
        </Button>
      </View>
      <View style={styles.row}>
        <Button disabled={true} mode={'contained'} onPress={() => {}}>
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

export default ContainedButtonDemo;
`;

export default ContainedButtonCode