import React, {useState} from 'react';
import {View} from 'react-native';
import {HelperText, TextInput} from 'react-native-paper';
import {Padding} from '../../Components/PaddingComponent';

const HelperTextScreen = () => {
  const [text, setText] = useState('');

  const onChangeText = (text: string) => setText(text);

  const hasErrors = () => {
    return !text.includes('@');
  };

  return (
    <View>
      <Padding>
        <TextInput label="Email" value={text} onChangeText={onChangeText} />
        <HelperText type="error" visible={hasErrors()}>
          Email address is invalid!
        </HelperText>
      </Padding>
    </View>
  );
};

export default HelperTextScreen;
