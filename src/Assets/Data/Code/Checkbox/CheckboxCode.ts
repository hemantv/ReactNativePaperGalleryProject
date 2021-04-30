const CheckboxCode = () => `import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Checkbox} from 'react-native-paper';

const CheckboxDemo = () => {
  const [checked, setChecked] = useState(false);
  const [indeterminateChecked, setIndeterminateChecked] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked(!checked);
          }}
        />
        <Checkbox status={'checked'} disabled={true} onPress={() => {}} />
      </View>
      <View style={styles.row}>
        <Checkbox
          status={indeterminateChecked ? 'indeterminate' : 'unchecked'}
          onPress={() => {
            setIndeterminateChecked(!indeterminateChecked);
          }}
        />
        <Checkbox status={'indeterminate'} disabled={true} onPress={() => {}} />
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default CheckboxDemo;
`;

export default CheckboxCode