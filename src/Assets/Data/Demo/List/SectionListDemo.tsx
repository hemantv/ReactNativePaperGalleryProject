import React from 'react';
import {StyleSheet, View} from 'react-native';
import {List} from 'react-native-paper';

const SectionListDemo = () => {
  return (
    <View style={styles.container}>
      <List.Section>
        <List.Subheader>Subheader</List.Subheader>
        <List.Item
          title="First Item"
          left={() => <List.Icon icon="folder" />}
        />
        <List.Item
          title="Second Item"
          left={() => <List.Icon icon="folder" />}
        />
      </List.Section>
      <List.Section>
        <List.Subheader>Description</List.Subheader>
        <List.Item
          title="First Item"
          description="Description for first item"
          left={() => <List.Icon icon="folder" />}
        />
        <List.Item
          title="Second Item"
          description="Description for second item"
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

export default SectionListDemo;
