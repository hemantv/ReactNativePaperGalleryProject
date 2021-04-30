import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Card, Paragraph} from 'react-native-paper';

const CardHeadersDemo = () => {
  return (
    <View style={styles.container}>
      <Card>
        <Card.Title
          title={'Card Title'}
          subtitle={'Card Subtitle'}></Card.Title>
        <Card.Content>
          <Paragraph>
            This is a card with headers including title and subtitle.
          </Paragraph>
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

export default CardHeadersDemo;
