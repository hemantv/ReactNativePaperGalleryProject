import React from 'react';
import {StyleSheet, View} from 'react-native';
import {List} from 'react-native-paper';

const BasicListDemo = () => {
  return (
    <View style={styles.container}>
      <List.Section>
        <List.Item
          title="First Item"
          left={() => <List.Icon icon="folder" />}
        />
        <List.Item
          title="Second Item"
          left={() => <List.Icon icon="folder" />}
        />
        <List.Item
          title="Third Item"
          left={() => <List.Icon icon="folder" />}
        />
      </List.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default BasicListDemo;
