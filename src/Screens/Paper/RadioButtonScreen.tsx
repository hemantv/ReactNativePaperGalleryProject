import React from 'react';
import {View} from 'react-native';
import {RadioButton, Text} from 'react-native-paper';
import {Padding} from '../../Components/PaddingComponent';
import {Title} from '../../Components/TitleComponent';

const RadioButtonScreen = () => {
  const [checked, setChecked] = React.useState('first');
  const [value, setValue] = React.useState('first');

  return (
    <View>
      <Padding>
        <Title>Default</Title>
        <RadioButton
          value="first"
          status={checked === 'first' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('first')}
        />
        <RadioButton
          value="second"
          status={checked === 'second' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('second')}
        />
      </Padding>
      <Padding>
        <Title>Radio Group</Title>
        <RadioButton.Group
          onValueChange={(newValue) => setValue(newValue)}
          value={value}>
          <View>
            <Text>First</Text>
            <RadioButton value="first" />
          </View>
          <View>
            <Text>Second</Text>
            <RadioButton value="second" />
          </View>
        </RadioButton.Group>
      </Padding>
    </View>
  );
};

export default RadioButtonScreen;
