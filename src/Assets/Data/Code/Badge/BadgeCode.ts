const BadgeCode = () => `import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Badge} from 'react-native-paper';

const BadgeDemo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Badge visible={true}>30k</Badge>
      </View>
      <View style={styles.row}>
        <Badge visible={true} size={32}>
          126
        </Badge>
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

export default BadgeDemo;
`;

export default BadgeCode