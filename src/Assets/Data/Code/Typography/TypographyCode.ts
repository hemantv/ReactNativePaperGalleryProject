const TypographyCode = () => `import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Caption,
  Headline,
  Paragraph,
  Subheading,
  Text,
  Title,
} from 'react-native-paper';

const TypographyDemo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text>Text</Text>
      </View>
      <View style={styles.row}>
        <Title>Title</Title>
      </View>
      <View style={styles.row}>
        <Subheading>Subheading</Subheading>
      </View>
      <View style={styles.row}>
        <Paragraph>Paragraph</Paragraph>
      </View>
      <View style={styles.row}>
        <Headline>Headline</Headline>
      </View>
      <View style={styles.row}>
        <Caption>Caption</Caption>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    margin: 16,
  },
});

export default TypographyDemo;
`;

export default TypographyCode