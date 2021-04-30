import React, {useState} from 'react';
import {Button, Colors, Snackbar} from 'react-native-paper';
import {Padding} from '../../Components/PaddingComponent';
import {Row} from '../../Components/RowComponent';
import {ScrollContent} from '../../Components/ScrollContentComponent';
import {Title} from '../../Components/TitleComponent';

const ButtonScreen = () => {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState('');

  const onPressButton = (active: string) => {
    setActive(active);
    if (!visible) {
      setVisible(true);
    }
  };
  const onDismissSnackBar = () => {
    setVisible(false);
  };

  return (
    <ScrollContent>
      <Title>Mode</Title>
      <Row>
        <Padding>
          <Button onPress={() => onPressButton('Default')}>Default</Button>
        </Padding>
        <Padding>
          <Button mode={'outlined'} onPress={() => onPressButton('Outlined')}>
            Outlined
          </Button>
        </Padding>
        <Padding>
          <Button mode={'contained'} onPress={() => onPressButton('Contained')}>
            Contained
          </Button>
        </Padding>
      </Row>
      <Title>Theme</Title>
      <Row>
        <Padding>
          <Button color={Colors.red800} onPress={() => onPressButton('Color')}>
            Color
          </Button>
        </Padding>
        <Padding>
          <Button
            mode={'contained'}
            color={Colors.red800}
            onPress={() => onPressButton('Color & contained')}>
            Default
          </Button>
        </Padding>
        <Padding>
          <Button dark={true} onPress={() => onPressButton('Dark')}>
            Dark
          </Button>
        </Padding>
      </Row>
      <Title>Size</Title>
      <Row>
        <Padding>
          <Button mode={'contained'} onPress={() => onPressButton('Default')}>
            Default
          </Button>
        </Padding>
        <Padding>
          <Button
            mode={'contained'}
            compact={true}
            onPress={() => onPressButton('Compact')}>
            Compact
          </Button>
        </Padding>
      </Row>
      <Title>Loading</Title>
      <Row>
        <Padding>
          <Button loading={true} onPress={() => onPressButton('Loading')}>
            Loading
          </Button>
        </Padding>
        <Padding>
          <Button
            mode={'contained'}
            loading={true}
            onPress={() => onPressButton('Loading & contained')}>
            Loading
          </Button>
        </Padding>
      </Row>
      <Title>Icon</Title>
      <Row>
        <Padding>
          <Button icon={'home'} onPress={() => onPressButton('Icon')}>
            Icon
          </Button>
        </Padding>
      </Row>
      <Title>Disabled</Title>
      <Row>
        <Padding>
          <Button disabled onPress={() => onPressButton('Disabled')}>
            Icon
          </Button>
        </Padding>
      </Row>

      <Snackbar visible={visible} onDismiss={onDismissSnackBar} duration={500}>
        {active} button clicked
      </Snackbar>
    </ScrollContent>
  );
};

export default ButtonScreen;
