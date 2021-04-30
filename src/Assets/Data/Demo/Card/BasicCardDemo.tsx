import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Card, Paragraph} from 'react-native-paper';

const BasicCardDemo = () => {
  return (
    <View style={styles.container}>
      <Card>
        <Card.Content>
          <Paragraph>This is just a basic card with some text.</Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
});

export default BasicCardDemo;
