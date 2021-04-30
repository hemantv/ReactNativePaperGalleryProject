const CardHeadersCode = () => `import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Card, Paragraph} from 'react-native-paper';

const CardActionsDemo = () => {
  return (
    <View style={styles.container}>
      <Card>
        <Card.Title
          title={'Card Title'}
          subtitle={'Card Subtitle'}></Card.Title>
        <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
        <Card.Content
          style={{
            paddingTop: 16,
          }}>
          <Paragraph>
            This is a card with cover including title and subtitle.
          </Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button>Share</Button>
          <Button>Explore</Button>
        </Card.Actions>
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

export default CardActionsDemo;
`;

export default CardHeadersCode