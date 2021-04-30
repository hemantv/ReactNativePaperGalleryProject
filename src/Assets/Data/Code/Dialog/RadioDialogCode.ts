const RadioDialogCode = () => `import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Dialog, Portal, RadioButton, Text} from 'react-native-paper';

const RadioDialogDemo = () => {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState('first');

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  return (
    <View style={styles.container}>
      <Button mode={'contained'} onPress={showDialog}>
        Show Radio Dialog
      </Button>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Radio Alert</Dialog.Title>
          <Dialog.Content>
            <RadioButton.Group
              onValueChange={(newValue) => setValue(newValue)}
              value={value}>
              <View style={styles.row}>
                <Text>First</Text>
                <RadioButton value="first" />
              </View>
              <View style={styles.row}>
                <Text>Second</Text>
                <RadioButton value="second" />
              </View>
              <View style={styles.row}>
                <Text>Third</Text>
                <RadioButton value="third" />
              </View>
              <View style={styles.row}>
                <Text>Fourth</Text>
                <RadioButton value="fourth" />
              </View>
            </RadioButton.Group>
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default RadioDialogDemo;
`;

export default RadioDialogCode