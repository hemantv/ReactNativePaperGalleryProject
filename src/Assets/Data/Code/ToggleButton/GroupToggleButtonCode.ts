const GroupToggleButtonCode = () => `import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {ToggleButton} from 'react-native-paper';

const GroupToggleButtonDemo = () => {
  const [value, setValue] = useState('left');

  return (
    <View style={styles.container}>
      <ToggleButton.Group
        onValueChange={(value) => setValue(value)}
        value={value}>
        <ToggleButton icon="format-align-left" value="left" />
        <ToggleButton icon="format-align-right" value="right" />
      </ToggleButton.Group>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default GroupToggleButtonDemo;
`;

export default GroupToggleButtonCode