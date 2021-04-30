import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Surface, Text} from 'react-native-paper';
import {Padding} from '../../Components/PaddingComponent';

const SurfaceScreen = () => {
  return (
    <View>
      <Padding>
        <Surface style={styles.surface}>
          <Text>Surface</Text>
        </Surface>
      </Padding>
    </View>
  );
};

const styles = StyleSheet.create({
  surface: {
    padding: 8,
    height: 80,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
});

export default SurfaceScreen;
