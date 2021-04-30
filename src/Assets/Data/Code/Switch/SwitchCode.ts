const SwitchCode = () => `import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Switch} from 'react-native-paper';

const SwitchDemo = () => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <View style={styles.container}>
      <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
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

export default SwitchDemo;
`;

export default SwitchCode