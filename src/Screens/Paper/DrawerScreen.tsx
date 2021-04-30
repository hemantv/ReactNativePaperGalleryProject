import React from 'react';
import {View} from 'react-native';
import {Drawer} from 'react-native-paper';
import {Padding} from '../../Components/PaddingComponent';

const DrawerScreen = () => {
  const [active, setActive] = React.useState('');

  return (
    <View>
      <Padding>
        <Drawer.Section title="Some title">
          <Drawer.Item
            label="First Item"
            active={active === 'first'}
            onPress={() => setActive('first')}
          />
          <Drawer.Item
            label="Second Item"
            active={active === 'second'}
            onPress={() => setActive('second')}
          />
        </Drawer.Section>
      </Padding>
    </View>
  );
};

export default DrawerScreen;
