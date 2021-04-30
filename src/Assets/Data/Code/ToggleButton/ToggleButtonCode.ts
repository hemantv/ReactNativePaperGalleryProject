const ToggleButtonCode = () => `import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {ToggleButton} from 'react-native-paper';

const ToggleButtonDemo = () => {
  const [status, setStatus] = useState('checked');

  const onButtonToggle = (value: string) => {
    setStatus(status === 'checked' ? 'unchecked' : 'checked');
  };

  return (
    <View style={styles.container}>
      <ToggleButton
        icon="bluetooth"
        value="bluetooth"
        status={status}
        onPress={onButtonToggle}
      />
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

export default ToggleButtonDemo;
`;

export default ToggleButtonCode