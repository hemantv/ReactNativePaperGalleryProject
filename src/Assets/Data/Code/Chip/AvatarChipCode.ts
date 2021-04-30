const AvatarChipCode = () => `import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Avatar, Chip} from 'react-native-paper';

const AvatarChipDemo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Chip
          avatar={<Avatar.Icon size={24} icon="information" />}
          onPress={() => {}}>
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
          onPress={() => {}}>
          Image
        </Chip>
      </View>
      <View style={styles.row}>
        <Chip
          avatar={<Avatar.Text size={24} label={'JD'} />}
          onPress={() => {}}>
          Text
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
    margin: 16,
  },
});

export default AvatarChipDemo;
`;

export default AvatarChipCode