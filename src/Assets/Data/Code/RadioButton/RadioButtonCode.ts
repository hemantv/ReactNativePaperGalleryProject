const RadioButtonCode = () => `import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {RadioButton} from 'react-native-paper';

const RadioButtonDemo = () => {
  const [value, setValue] = useState('first');

  return (
    <View style={styles.container}>
      <RadioButton.Group
        onValueChange={(newValue) => setValue(newValue)}
        value={value}>
        <View style={styles.row}>
          <RadioButton value="first" />
          <RadioButton value="second" />
          <RadioButton value="third" />
        </View>
      </RadioButton.Group>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default RadioButtonDemo;
`;

export default RadioButtonCode