import React, {useCallback, useState} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {
  Button,
  Checkbox,
  Dialog,
  Paragraph,
  Portal,
  RadioButton,
  Text,
  TextInput,
} from 'react-native-paper';
import {Padding} from '../../Components/PaddingComponent';
import {Row} from '../../Components/RowComponent';
import {ScrollContent} from '../../Components/ScrollContentComponent';
import {Title} from '../../Components/TitleComponent';

const BasicDialog = () => {
  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  return (
    <View>
      <Padding>
        <Title>Basic Dialog</Title>
      </Padding>
      <Button mode={'contained'} onPress={showDialog}>
        Show Basic Dialog
      </Button>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Alert</Dialog.Title>
          <Dialog.Content>
            <Paragraph>This is simple dialog</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Done</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

const InputDialog = () => {
  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  return (
    <View>
      <Padding>
        <Title>Prompt Dialog</Title>
      </Padding>
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

const ConfirmationDialog = () => {
  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  return (
    <View>
      <Padding>
        <Title>Confirmation Dialog</Title>
      </Padding>
      <Button mode={'contained'} onPress={showDialog}>
        Show Confirmation Dialog
      </Button>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Confirmation Alert</Dialog.Title>
          <Dialog.Content>
            <Text>
              This is a dialog for confirmation. Are you sure you want to
              continue?
            </Text>
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

const rowStyle: StyleProp<ViewStyle> = {
  justifyContent: 'space-between',
};

const RadioDialog = () => {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState('first');

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  return (
    <View>
      <Padding>
        <Title>Radio Dialog</Title>
      </Padding>
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
              <Row style={rowStyle}>
                <Text>First</Text>
                <RadioButton value="first" />
              </Row>
              <Row style={rowStyle}>
                <Text>Second</Text>
                <RadioButton value="second" />
              </Row>
              <Row style={rowStyle}>
                <Text>Third</Text>
                <RadioButton value="third" />
              </Row>
              <Row style={rowStyle}>
                <Text>Fourth</Text>
                <RadioButton value="fourth" />
              </Row>
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

const CheckboxDialog = () => {
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
    <View>
      <Padding>
        <Title>CheckboxDialog Dialog</Title>
      </Padding>
      <Button mode={'contained'} onPress={showDialog}>
        Show Checkbox Dialog
      </Button>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Checkbox Alert</Dialog.Title>
          <Dialog.Content>
            <Row style={rowStyle}>
              <Text>First</Text>
              <Checkbox
                status={getStatus('first')}
                onPress={() => {
                  toggleStatus('first');
                }}
              />
            </Row>
            <Row style={rowStyle}>
              <Text>Second</Text>
              <Checkbox
                status={getStatus('second')}
                onPress={() => {
                  toggleStatus('second');
                }}
              />
            </Row>
            <Row style={rowStyle}>
              <Text>Third</Text>
              <Checkbox
                status={getStatus('third')}
                onPress={() => {
                  toggleStatus('third');
                }}
              />
            </Row>
            <Row style={rowStyle}>
              <Text>Fourth</Text>
              <Checkbox
                status={getStatus('fourth')}
                onPress={() => {
                  toggleStatus('fourth');
                }}
              />
            </Row>
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

const DialogScreen = () => {
  return (
    <ScrollContent style={{paddingTop: 0}}>
      <BasicDialog />
      <InputDialog />
      <ConfirmationDialog />
      <RadioDialog />
      <CheckboxDialog />
    </ScrollContent>
  );
};

export default DialogScreen;
