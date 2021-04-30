const FabCode = () => `import React from 'react';
import {StyleSheet, View} from 'react-native';
import {FAB} from 'react-native-paper';

const FabDemo = () => {
  return (
    <View style={styles.container}>
      <FAB style={styles.fab} label={'New'} icon={'plus'} onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default FabDemo;
`;

export default FabCode