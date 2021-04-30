import React from 'react';
import {Divider, Text, Title} from 'react-native-paper';
import {Content} from '../../Components/ContentComponent';
import {Padding} from '../../Components/PaddingComponent';

const DividerScreen = () => {
  return (
    <Content>
      <Title>List with divider</Title>
      <Padding>
        <Text>First</Text>
      </Padding>
      <Divider />
      <Padding>
        <Text>Second</Text>
      </Padding>
      <Divider />
      <Padding>
        <Text>Third</Text>
      </Padding>
      <Divider />
      <Padding>
        <Text>Fourth</Text>
      </Padding>
      <Divider />
      <Padding>
        <Text>Fifth</Text>
      </Padding>
      <Divider />
    </Content>
  );
};

export default DividerScreen;
