import React from 'react';
import {View} from 'react-native';
import {Switch} from 'react-native-paper';
import {Padding} from '../../Components/PaddingComponent';

const SwitchScreen = () => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <View>
      <Padding>
        <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />;
      </Padding>
    </View>
  );
};

export default SwitchScreen;
