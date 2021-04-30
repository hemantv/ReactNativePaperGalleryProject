import React from 'react';
import {View} from 'react-native';
import {ProgressBar} from 'react-native-paper';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Padding} from '../../Components/PaddingComponent';

const ProgressBarScreen = () => {
  return (
    <View>
      <Padding>
        <ProgressBar progress={0.5} color={Colors.red800} />
      </Padding>
    </View>
  );
};

export default ProgressBarScreen;
