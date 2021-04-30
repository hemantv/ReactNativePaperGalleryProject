const IconChipCode = () => `import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Chip} from 'react-native-paper';

const IconChipDemo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Chip icon={'information'} onPress={() => {}}>
          Default
        </Chip>
      </View>
      <View style={styles.row}>
        <Chip selected={true} icon={'information'} onPress={() => {}}>
          Selected
        </Chip>
      </View>
      <View style={styles.row}>
        <Chip disabled={true} icon={'information'} onPress={() => {}}>
          Disabled
        </Chip>
      </View>
      <View style={styles.row}>
        <Chip
          disabled={true}
          selected={true}
          icon={'information'}
          onPress={() => {}}>
          Selected
        </Chip>
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

export default IconChipDemo;
`;

export default IconChipCode