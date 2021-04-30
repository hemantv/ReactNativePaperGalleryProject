const CheckboxDialogCode = () => `import React, {useCallback, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Checkbox, Dialog, Portal, Text} from 'react-native-paper';

const CheckboxDialogDemo = () => {
  const [visible, setVisible] = useState(false);
  const [checked, setChecked] = useState<string[]>([]);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  const getStatus = useCallback((item: string) => {
    return checked.indexOf(item) >= 0 ? 'checked' : 'unchecked';
  }, []);

  const toggleStatus = useCallback((item: string) => {
    const index = checked.indexOf(item);
    if (index >= 0) {
      checked.splice(index, 1);
    } else {
      checked.push(item);
    }
    setChecked([...checked]);
  }, []);

  return (
    <View style={styles.container}>
      <Button mode={'contained'} onPress={showDialog}>
        Show Checkbox Dialog
      </Button>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Checkbox Alert</Dialog.Title>
          <Dialog.Content>
            <View style={styles.row}>
              <Text>First</Text>
              <Checkbox
                status={getStatus('first')}
                onPress={() => {
                  toggleStatus('first');
                }}
              />
            </View>
            <View style={styles.row}>
              <Text>Second</Text>
              <Checkbox
                status={getStatus('second')}
                onPress={() => {
                  toggleStatus('second');
                }}
              />
            </View>
            <View style={styles.row}>
              <Text>Third</Text>
              <Checkbox
                status={getStatus('third')}
                onPress={() => {
                  toggleStatus('third');
                }}
              />
            </View>
            <View style={styles.row}>
              <Text>Fourth</Text>
              <Checkbox
                status={getStatus('fourth')}
                onPress={() => {
                  toggleStatus('fourth');
                }}
              />
            </View>
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

export default CheckboxDialogDemo;
`;

export default CheckboxDialogCode