import React from 'react';
import {StyleSheet} from 'react-native';
import {Title} from 'react-native-paper';

interface TitleComponentProps {}

const TitleComponent = (
  props: React.PropsWithChildren<TitleComponentProps>,
) => {
  return <Title style={styles.title}>{props.children}</Title>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
  },
});

export {TitleComponent as Title};
