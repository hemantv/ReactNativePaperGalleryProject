const FlatChipCode = () => `import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Avatar, Chip} from 'react-native-paper';

const FlatChipDemo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Chip onPress={() => {}}>Default</Chip>
      </View>
      <View style={styles.row}>
        <Chip selected={true} onPress={() => {}}>
          Selected
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
          onPress={() => {}}>
          Avatar
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
          onPress={() => {}}>
          Selected
        </Chip>
      </View>
      <View style={styles.row}>
        <Chip disabled={true} onPress={() => {}}>
          Disabled
        </Chip>
      </View>
      <View style={styles.row}>
        <Chip disabled={true} selected={true} onPress={() => {}}>
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

export default FlatChipDemo;
`;

export default FlatChipCode