const HeaderListCode = () => `import React from 'react';
import {StyleSheet, View} from 'react-native';
import {List} from 'react-native-paper';

const HeaderListDemo = () => {
  return (
    <View style={styles.container}>
      <List.Section>
        <List.Subheader>Some title</List.Subheader>
        <List.Item
          title="First Item"
          left={() => <List.Icon icon="folder" />}
        />
        <List.Item
          title="Second Item"
          left={() => <List.Icon color="#000" icon="folder" />}
        />
      </List.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default HeaderListDemo;
`;

export default HeaderListCode