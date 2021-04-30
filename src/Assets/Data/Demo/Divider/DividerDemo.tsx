import React, {useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import {Divider, List} from 'react-native-paper';

const DividerDemo = () => {
  const items = useMemo(
    () => ['Apple', 'Banana', 'Coconut', 'Lemon', 'Mango', 'Peach'],
    [],
  );

  return (
    <View style={styles.container}>
      {items.map((item) => {
        return (
          <View key={item}>
            <List.Item title={item} />
            <Divider />
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default DividerDemo;
