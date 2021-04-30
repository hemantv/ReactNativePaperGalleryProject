import React from 'react';
import {View} from 'react-native';
import {Button, Snackbar} from 'react-native-paper';
import {Padding} from '../../Components/PaddingComponent';

const SnackbarScreen = () => {
  const [visible, setVisible] = React.useState(false);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

  return (
    <View>
      <Padding>
        <Button onPress={onToggleSnackBar}>{visible ? 'Hide' : 'Show'}</Button>
        <Snackbar
          visible={visible}
          onDismiss={onDismissSnackBar}
          action={{
            label: 'Undo',
            onPress: () => {
              // Do something
            },
          }}>
          Hey there! I'm a Snackbar.
        </Snackbar>
      </Padding>
    </View>
  );
};

export default SnackbarScreen;
