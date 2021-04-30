import React from 'react';
import {Button, Card, Paragraph} from 'react-native-paper';
import {Padding} from '../../Components/PaddingComponent';
import {ScrollContent} from '../../Components/ScrollContentComponent';
import {Title} from '../../Components/TitleComponent';

const CardScreen = () => {
  return (
    <ScrollContent
      style={{
        paddingTop: 0,
      }}>
      <Padding>
        <Title>Basic Cards</Title>
      </Padding>
      <Card>
        <Card.Content>
          <Paragraph>This is just a basic card with some text.</Paragraph>
        </Card.Content>
      </Card>
      <Padding>
        <Title>Card Headers</Title>
      </Padding>
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
      <Padding>
        <Title>Card Cover</Title>
      </Padding>
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
      </Card>
      <Padding>
        <Title>Card Actions</Title>
      </Padding>
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
    </ScrollContent>
  );
};

export default CardScreen;
