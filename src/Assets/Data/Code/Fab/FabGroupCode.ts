const FabGroupCode = () => `import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {FAB, Portal, Provider} from 'react-native-paper';

const FabGroupDemo = () => {
  const [state, setState] = useState({open: false});

  const onStateChange = ({open}: {open: boolean}) => setState({open});

  const {open} = state;

  return (
    <View style={styles.container}>
      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => onStateChange({open: !open})}
      />

      <Provider>
        <Portal>
          <FAB.Group
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

export default FabGroupDemo;
`;

export default FabGroupCode