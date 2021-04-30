import React, {useState} from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {Checkbox, Colors, Text} from 'react-native-paper';
import {Padding} from '../../Components/PaddingComponent';
import {Row} from '../../Components/RowComponent';
import {ScrollContent} from '../../Components/ScrollContentComponent';

const _paddingStyle: StyleProp<ViewStyle> = {
  alignItems: 'stretch',
};

const rowStyle: StyleProp<ViewStyle> = {
  flex: 1,
  justifyContent: 'space-between',
};

const CheckboxScreen = () => {
  const [normalChecked, setNormalChecked] = useState(false);
  const [colorChecked, setColorChecked] = useState(false);

  return (
    <ScrollContent>
      <Padding style={_paddingStyle}>
        <Row style={rowStyle}>
          <Text>Normal Checkbox</Text>
          <Checkbox
            status={normalChecked ? 'checked' : 'unchecked'}
            onPress={() => {
              setNormalChecked(!normalChecked);
            }}
          />
        </Row>
      </Padding>
      <Padding style={_paddingStyle}>
        <Row style={rowStyle}>
          <Text>Color Checkbox</Text>
          <Checkbox
            color={Colors.red900}
            status={colorChecked ? 'checked' : 'unchecked'}
            onPress={() => {
              setColorChecked(!colorChecked);
            }}
          />
        </Row>
      </Padding>
      <Padding style={_paddingStyle}>
        <Row style={rowStyle}>
          <Text>Checked Disabled</Text>
          <Checkbox status={'checked'} disabled={true} />
        </Row>
      </Padding>
      <Padding>
        <Row>
          <Text>Unchecked Disabled</Text>
          <Checkbox status={'unchecked'} />
        </Row>
      </Padding>
    </ScrollContent>
  );
};

export default CheckboxScreen;
