import React from 'react';
import {Avatar, Chip, Colors} from 'react-native-paper';
import {Padding} from '../../Components/PaddingComponent';
import {Row} from '../../Components/RowComponent';
import {ScrollContent} from '../../Components/ScrollContentComponent';
import {Title} from '../../Components/TitleComponent';

const ChipScreen = () => {
  return (
    <ScrollContent>
      <Title>Mode</Title>
      <Row>
        <Padding>
          <Chip onPress={() => console.log('Pressed')}>Flat</Chip>
        </Padding>
        <Padding>
          <Chip mode={'outlined'} onPress={() => console.log('Pressed')}>
            Outlined
          </Chip>
        </Padding>
        <Padding>
          <Chip selected={true} onPress={() => console.log('Pressed')}>
            Flat
          </Chip>
        </Padding>
      </Row>
      <Row>
        <Padding>
          <Chip
            selected={true}
            mode={'outlined'}
            onPress={() => console.log('Pressed')}>
            Outlined
          </Chip>
        </Padding>
        <Padding>
          <Chip
            selected={true}
            selectedColor={Colors.red900}
            onPress={() => console.log('Pressed')}>
            Flat
          </Chip>
        </Padding>
        <Padding>
          <Chip
            selected={true}
            selectedColor={Colors.red900}
            mode={'outlined'}
            onPress={() => console.log('Pressed')}>
            Outlined
          </Chip>
        </Padding>
      </Row>
      <Title>Icon</Title>
      <Row>
        <Padding>
          <Chip icon="information" onPress={() => console.log('Pressed')}>
            Icon
          </Chip>
        </Padding>
        <Padding>
          <Chip
            icon="information"
            selected={true}
            onPress={() => console.log('Pressed')}>
            Icon
          </Chip>
        </Padding>
        <Padding>
          <Chip
            selected={true}
            selectedColor={Colors.red900}
            icon="information"
            onPress={() => console.log('Pressed')}>
            Outlined
          </Chip>
        </Padding>
      </Row>
      <Title>Avatar</Title>
      <Row>
        <Padding>
          <Chip
            avatar={<Avatar.Icon size={24} icon="information" />}
            onPress={() => console.log('Pressed')}>
            Icon
          </Chip>
        </Padding>
        <Padding>
          <Chip
            avatar={
              <Avatar.Image
                size={24}
                source={require('../../Assets/Icon/avatar.png')}
              />
            }
            onPress={() => console.log('Pressed')}>
            Image
          </Chip>
        </Padding>
        <Padding>
          <Chip
            avatar={<Avatar.Text size={24} label={'JD'} />}
            onPress={() => console.log('Pressed')}>
            Text
          </Chip>
        </Padding>
      </Row>
    </ScrollContent>
  );
};

export default ChipScreen;
