import React, {useState} from 'react';
import {Platform, StyleProp, ViewStyle} from 'react-native';
import {Appbar, Checkbox, Text} from 'react-native-paper';
import {Content} from '../../Components/ContentComponent';
import {Row} from '../../Components/RowComponent';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const AppbarScreen = () => {
  const [basicChecked, setBasicChecked] = useState(true);
  const [subtitleChecked, setSubtitleChecked] = useState(false);
  const [backChecked, setBackChecked] = useState(false);
  const [actionChecked, setActionChecked] = useState(false);

  const rowStyle: StyleProp<ViewStyle> = {};

  const getAppBar = () => {
    return (
      <Appbar.Header>
        {backChecked && <Appbar.BackAction />}
        <Appbar.Content
          title="Title"
          subtitle={subtitleChecked && 'Subtitle'}
        />
        {actionChecked && <Appbar.Action icon="magnify" />}
        {actionChecked && <Appbar.Action icon={MORE_ICON} onPress={() => {}} />}
      </Appbar.Header>
    );
  };

  return (
    <Content
      style={{
        padding: 0,
      }}>
      {getAppBar()}
      <Content>
        <Row style={rowStyle}>
          <Checkbox
            status={basicChecked ? 'checked' : 'unchecked'}
            onPress={() => {
              setBasicChecked(!basicChecked);
            }}
          />
          <Text>Basic</Text>
        </Row>
        <Row style={rowStyle}>
          <Checkbox
            status={subtitleChecked ? 'checked' : 'unchecked'}
            onPress={() => {
              setSubtitleChecked(!subtitleChecked);
            }}
          />
          <Text>Subtitle</Text>
        </Row>
        <Row style={rowStyle}>
          <Checkbox
            status={backChecked ? 'checked' : 'unchecked'}
            onPress={() => {
              setBackChecked(!backChecked);
            }}
          />
          <Text>Back Action</Text>
        </Row>
        <Row style={rowStyle}>
          <Checkbox
            status={actionChecked ? 'checked' : 'unchecked'}
            onPress={() => {
              setActionChecked(!actionChecked);
            }}
          />
          <Text>Actions</Text>
        </Row>
      </Content>
    </Content>
  );
};

export default AppbarScreen;
