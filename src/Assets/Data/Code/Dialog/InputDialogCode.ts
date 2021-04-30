const InputDialogCode = () => `import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Dialog, Portal, TextInput} from 'react-native-paper';

const InputDialogDemo = () => {
  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  return (
    <View style={styles.container}>
      <Button mode={'contained'} onPress={showDialog}>
        Show Prompt Dialog
      </Button>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Input Alert</Dialog.Title>
          <Dialog.Content>
            <TextInput
              placeholder={'This is a dialog with text input.'}></TextInput>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>CANCEL</Button>
            <Button onPress={hideDialog}>OK</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
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

export default InputDialogDemo;
`;

export default InputDialogCode