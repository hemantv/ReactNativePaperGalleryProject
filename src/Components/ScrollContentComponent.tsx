import React from 'react';
import {StyleProp, StyleSheet, ViewStyle} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface ScrollContentComponentProps {
  style?: StyleProp<ViewStyle>;
}

const ScrollContentComponent = (
  props: React.PropsWithChildren<ScrollContentComponentProps>,
) => {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={styles.container}
      contentcontainerStyle={[
        styles.content,
        {
          paddingBottom: insets.bottom,
        },
        props.style,
      ]}>
      {props.children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
});

export {ScrollContentComponent as ScrollContent};
