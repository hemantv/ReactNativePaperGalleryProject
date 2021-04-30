const FlatTextInputCode = () => `import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-paper';

const FlatTextInputDemo = () => {
  const [text, setText] = React.useState('');

  return (
    <View style={styles.container}>
      <TextInput
        label="Email"
        value={text}
        onChangeText={(text) => setText(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
});

export default FlatTextInputDemo;
`;

export default FlatTextInputCode