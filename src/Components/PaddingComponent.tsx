import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

interface PaddingComponentProps {
  style?: StyleProp<ViewStyle>;
}

const PaddingComponent = (
  props: React.PropsWithChildren<PaddingComponentProps>,
) => {
  return <View style={[styles.container, props.style]}>{props.children}</View>;
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    padding: 8,
  },
});

export {PaddingComponent as Padding};
