import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {FAB, Portal, Provider} from 'react-native-paper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Content} from '../../Components/ContentComponent';

const FabScreen = () => {
  const [state, setState] = useState({open: false});

  const onStateChange = ({open}: {open: boolean}) => setState({open});

  const {open} = state;

  const insets = useSafeAreaInsets();

  return (
    <Content>
      <FAB
        style={[
          styles.leftFab,
          {
            marginBottom: insets.bottom,
          },
        ]}
        label="NEW"
        icon="plus"
      />
      <FAB
        style={[
          styles.rightFab,
          {
            marginBottom: insets.bottom,
          },
        ]}
        icon="plus"
        onPress={() => onStateChange({open: !open})}
      />

      <Provider>
        <Portal>
          <FAB.Group
            style={{
              left: 0,
            }}
            visible={open}
            open={open}
            icon={open ? 'calendar-today' : 'plus'}
            actions={[
              {icon: 'plus', onPress: () => console.log('Pressed add')},
              {
                icon: 'star',
                label: 'Star',
                onPress: () => console.log('Pressed star'),
              },
              {
                icon: 'email',
                label: 'Email',
                onPress: () => console.log('Pressed email'),
              },
              {
                icon: 'bell',
                label: 'Remind',
                onPress: () => console.log('Pressed notifications'),
              },
            ]}
            onStateChange={onStateChange}
            onPress={() => {
              if (open) {
                // do something if the speed dial is open
              }
            }}
          />
        </Portal>
      </Provider>
    </Content>
  );
};

const styles = StyleSheet.create({
  leftFab: {
    position: 'absolute',
    margin: 16,
    left: 0,
    bottom: 0,
  },
  rightFab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default FabScreen;
