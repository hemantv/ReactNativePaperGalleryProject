import React from 'react';
import {Avatar} from 'react-native-paper';
import {Content} from '../../Components/ContentComponent';
import {Padding} from '../../Components/PaddingComponent';
import {Title} from '../../Components/TitleComponent';

const AvatarScreen = () => {
  return (
    <Content>
      <Padding>
        <Title>Avatar with Icon</Title>
        <Avatar.Icon size={24} icon="folder" />
      </Padding>
      <Padding>
        <Title>Avatar with Text</Title>
        <Avatar.Text size={24} label="XD" />
      </Padding>
    </Content>
  );
};

export default AvatarScreen;
