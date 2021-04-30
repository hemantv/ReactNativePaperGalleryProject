import React from 'react';
import {View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Padding} from '../../Components/PaddingComponent';

const TextInputScreen = () => {
  const [text, setText] = React.useState('');

  return (
    <View>
      <Padding>
        <TextInput
          label="Email"
          value={text}
          onChangeText={(text) => setText(text)}
        />
      </Padding>
    </View>
  );
};

export default TextInputScreen;
