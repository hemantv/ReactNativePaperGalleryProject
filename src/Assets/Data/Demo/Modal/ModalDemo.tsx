import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Button,
  Modal,
  Portal,
  Provider,
  Text,
  useTheme,
} from 'react-native-paper';

const ModalDemo = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const theme = useTheme();

  return (
    <Provider>
      <View style={styles.container}>
        <Button onPress={showModal}>Show Modal</Button>
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={[
              styles.modal,
              {
                backgroundColor: theme.colors.background,
              },
            ]}>
            <Text
              style={{
                color: theme.colors.text,
              }}>
              Example Modal. Click outside this area to dismiss.
            </Text>
          </Modal>
        </Portal>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    margin: 16,
    padding: 16,
  },
});

export {ModalDemo};
