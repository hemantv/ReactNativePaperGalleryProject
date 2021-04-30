const IconButtonCode = () => `import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {Colors, IconButton} from 'react-native-paper';

const IconButtonDemo = () => {
  const containerStyle: StyleProp<ViewStyle> = {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <View style={containerStyle}>
      <IconButton
        icon={'camera'}
        size={20}
        color={Colors.blue800}
        onPress={() => {}}
      />
      <IconButton
        icon={'camera'}
        size={32}
        color={Colors.blue800}
        onPress={() => {}}
      />
    </View>
  );
};

export default IconButtonDemo;
`;

export default IconButtonCode