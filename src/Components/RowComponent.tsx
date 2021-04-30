import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

interface RowComponentProps {
  style?: StyleProp<ViewStyle>;
}

const RowComponent = (props: React.PropsWithChildren<RowComponentProps>) => {
  return <View style={[styles.container, props.style]}>{props.children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
});

export {RowComponent as Row};
