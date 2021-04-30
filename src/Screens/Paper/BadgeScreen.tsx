import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {Badge, Card, Subheading} from 'react-native-paper';
import {Padding} from '../../Components/PaddingComponent';
import {Row} from '../../Components/RowComponent';
import {ScrollContent} from '../../Components/ScrollContentComponent';

const _paddingStyle: StyleProp<ViewStyle> = {
  alignItems: 'stretch',
};

const rowStyle: StyleProp<ViewStyle> = {
  justifyContent: 'space-between',
};

const BadgeScreen = () => {
  return (
    <ScrollContent>
      <Card>
        <Card.Content>
          <Padding style={_paddingStyle}>
            <Row style={rowStyle}>
              <Subheading>Followers</Subheading>
              <Badge visible={true}>30k</Badge>
            </Row>
          </Padding>
          <Padding style={_paddingStyle}>
            <Row style={rowStyle}>
              <Subheading>Likes</Subheading>
              <Badge visible={true}>126</Badge>
            </Row>
          </Padding>
          <Padding style={_paddingStyle}>
            <Row style={rowStyle}>
              <Subheading>Notifications</Subheading>
              <Badge visible={true} size={32}>
                126
              </Badge>
            </Row>
          </Padding>
        </Card.Content>
      </Card>
    </ScrollContent>
  );
};

export default BadgeScreen;
