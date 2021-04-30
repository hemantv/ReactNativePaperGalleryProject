import React from 'react';
import {View} from 'react-native';
import {Text, TouchableRipple} from 'react-native-paper';
import {Padding} from '../../Components/PaddingComponent';

const TouchableRippleScreen = () => {
  return (
    <View>
      <Padding>
        <TouchableRipple
          onPress={() => console.log('Pressed')}
          rippleColor="rgba(0, 0, 0, .32)">
          <Text>Press anywhere</Text>
        </TouchableRipple>
      </Padding>
    </View>
  );
};

export default TouchableRippleScreen;
