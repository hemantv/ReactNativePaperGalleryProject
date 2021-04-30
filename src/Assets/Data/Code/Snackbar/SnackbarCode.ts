const SnackbarCode = () => `import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Snackbar} from 'react-native-paper';

const SnackbarDemo = () => {
  const [visible, setVisible] = useState(false);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

  return (
    <View style={styles.container}>
      <Button onPress={onToggleSnackBar}>
        {visible ? 'Hide Snackbar' : 'Show Snackbar'}
      </Button>
      <Snackbar
        visible={visible}
        duration={3000}
        onDismiss={onDismissSnackBar}
        action={{
          label: 'Undo',
          onPress: () => {},
        }}>
        Hey there! I'm a Snackbar.
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SnackbarDemo;
`;

export default SnackbarCode