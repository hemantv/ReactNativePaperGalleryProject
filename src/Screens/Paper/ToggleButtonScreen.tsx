import React from 'react';
import {View} from 'react-native';
import {ToggleButton} from 'react-native-paper';
import {Padding} from '../../Components/PaddingComponent';

const ToggleButtonScreen = () => {
  const [status, setStatus] = React.useState<'checked' | 'unchecked'>(
    'checked',
  );

  const onButtonToggle = (value: any) => {
    setStatus(status === 'checked' ? 'unchecked' : 'checked');
  };

  const [value, setValue] = React.useState('left');

  return (
    <View>
      <Padding>
        <ToggleButton
          icon="bluetooth"
          value="bluetooth"
          status={status}
          onPress={onButtonToggle}
        />
      </Padding>
      <Padding>
        <ToggleButton.Group
          onValueChange={(value) => setValue(value)}
          value={value}>
          <ToggleButton icon="format-align-left" value="left" />
          <ToggleButton icon="format-align-right" value="right" />
        </ToggleButton.Group>
      </Padding>
    </View>
  );
};

export default ToggleButtonScreen;
