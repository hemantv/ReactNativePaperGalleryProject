import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {HelperText, TextInput} from 'react-native-paper';

const HelperTextDemo = () => {
  const [text, setText] = useState('');

  const onChangeText = (text: string) => setText(text);

  const hasErrors = () => {
    return !text.includes('@');
  };

  return (
    <View style={styles.container}>
      <TextInput label="Email" value={text} onChangeText={onChangeText} />
      <HelperText type="error" visible={hasErrors()}>
        Email address is invalid!
      </HelperText>
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

export default HelperTextDemo;
