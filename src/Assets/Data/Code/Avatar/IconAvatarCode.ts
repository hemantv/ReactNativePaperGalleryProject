const IconAvatarCode = () => `import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Avatar} from 'react-native-paper';

const IconAvatarDemo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Avatar.Icon icon="folder" />
      </View>
      <View style={styles.row}>
        <Avatar.Icon size={80} icon="folder" />
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

export default IconAvatarDemo;
`;

export default IconAvatarCode