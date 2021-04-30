const ActionAppbarCode = () => `import React from 'react';
import {Appbar} from 'react-native-paper';

const ActionAppbarDemo = () => {
  return (
    <Appbar.Header>
      <Appbar.Content title="Title" subtitle={'Subtitle'} />
      <Appbar.Action icon={'magnify'} onPress={() => {}} />
      <Appbar.Action icon={'dots-vertical'} onPress={() => {}} />
    </Appbar.Header>
  );
};

export default ActionAppbarDemo;
`;

export default ActionAppbarCode