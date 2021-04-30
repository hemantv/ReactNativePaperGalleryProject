import React from 'react';
import {View} from 'react-native';
import {
  Caption,
  Headline,
  Paragraph,
  Subheading,
  Text,
} from 'react-native-paper';
import {Padding} from '../../Components/PaddingComponent';
import {Title} from '../../Components/TitleComponent';

const TypographyScreen = () => {
  return (
    <View>
      <Padding>
        <Title>Text</Title>
        <Text>Text Label</Text>
      </Padding>
      <Padding>
        <Title>Title</Title>
        <Title>Title Label</Title>
      </Padding>
      <Padding>
        <Title>Subheading</Title>
        <Subheading>Subheading Label</Subheading>
      </Padding>
      <Padding>
        <Title>Paragraph</Title>
        <Paragraph>Paragraph</Paragraph>
      </Padding>
      <Padding>
        <Title>Headline</Title>
        <Headline>Headline Label</Headline>
      </Padding>
      <Padding>
        <Title>Caption</Title>
        <Caption>Caption Label</Caption>
      </Padding>
    </View>
  );
};

export default TypographyScreen;
