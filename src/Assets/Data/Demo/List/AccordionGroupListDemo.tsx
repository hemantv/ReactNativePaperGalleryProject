import React from 'react';
import {StyleSheet, View} from 'react-native';
import {List, Text} from 'react-native-paper';

const AccordionGroupListDemo = () => {
  return (
    <View style={styles.container}>
      <List.AccordionGroup>
        <List.Accordion title="Accordion 1" id="1">
          <List.Item title="Item 1" />
        </List.Accordion>
        <List.Accordion title="Accordion 2" id="2">
          <List.Item title="Item 2" />
        </List.Accordion>
        <View>
          <Text>
            List.Accordion can be wrapped because implementation uses
            React.Context.
          </Text>
          <List.Accordion title="Accordion 3" id="3">
            <List.Item title="Item 3" />
          </List.Accordion>
        </View>
      </List.AccordionGroup>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default AccordionGroupListDemo;
