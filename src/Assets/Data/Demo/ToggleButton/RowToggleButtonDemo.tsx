import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {ToggleButton} from 'react-native-paper';

const RowToggleButtonDemo = () => {
  const [value, setValue] = useState('left');

  return (
    <View style={styles.container}>
      <ToggleButton.Row
        onValueChange={(value) => setValue(value)}
        value={value}>
        <ToggleButton icon="format-align-left" value="left" />
        <ToggleButton icon="format-align-right" value="right" />
      </ToggleButton.Row>
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

export default RowToggleButtonDemo;
