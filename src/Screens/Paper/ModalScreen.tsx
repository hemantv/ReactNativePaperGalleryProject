import React from 'react';
import {View} from 'react-native';
import {Button, Modal, Portal, Provider, Text} from 'react-native-paper';

const ModalScreen = () => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};

  return (
    <View>
      <Provider>
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentcontainerStyle={containerStyle}>
            <Text>Example Modal. Click outside this area to dismiss.</Text>
          </Modal>
        </Portal>
        <Button style={{marginTop: 30}} onPress={showModal}>
          Show
        </Button>
      </Provider>
    </View>
  );
};

export default ModalScreen;
