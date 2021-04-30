import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Subheading, Title, TouchableRipple} from 'react-native-paper';

type ListComponentProps = {
  title: string;
  onPress: any;
};

const ListComponent = ({title, onPress}: ListComponentProps) => {
  return (
    <TouchableRipple style={styles.container} onPress={onPress}>
      <View>
        <Title>{title}</Title>
        <Subheading style={styles.subheading}>
          This will be subheading
        </Subheading>
      </View>
    </TouchableRipple>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  subheading: {
    color: '#888',
  },
});

export default ListComponent;
