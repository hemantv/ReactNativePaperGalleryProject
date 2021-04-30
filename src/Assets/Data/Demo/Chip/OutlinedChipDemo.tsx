import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Avatar, Chip} from 'react-native-paper';

const OutlinedChipDemo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Chip mode={'outlined'} onPress={() => {}}>
          Default
        </Chip>
      </View>
      <View style={styles.row}>
        <Chip selected={true} mode={'outlined'} onPress={() => {}}>
          Selected
        </Chip>
      </View>
      <View style={styles.row}>
        <Chip icon={'information'} mode={'outlined'} onPress={() => {}}>
          Icon
        </Chip>
      </View>
      <View style={styles.row}>
        <Chip
          avatar={
            <Avatar.Image
              size={24}
              source={require('../../../../Assets/Icon/avatar.png')}
            />
          }
          selected={true}
          mode={'outlined'}
          onPress={() => {}}>
          Selected
        </Chip>
      </View>
      <View style={styles.row}>
        <Chip disabled={true} mode={'outlined'} onPress={() => {}}>
          Disabled
        </Chip>
      </View>
      <View style={styles.row}>
        <Chip
          disabled={true}
          selected={true}
          mode={'outlined'}
          onPress={() => {}}>
          Selected
        </Chip>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    margin: 8,
  },
});

export default OutlinedChipDemo;
