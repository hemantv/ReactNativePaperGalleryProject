const AppbarCode = () => `import React, {useState} from 'react';
import {Platform, View} from 'react-native';
import {Appbar, Checkbox} from 'react-native-paper';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const AppbarDemo = () => {
  const [subtitleChecked, setSubtitleChecked] = useState(false);
  const [backChecked, setBackChecked] = useState(false);
  const [actionChecked, setActionChecked] = useState(false);

  return (
    <View>
      <Appbar.Header>
        {backChecked && <Appbar.BackAction />}
        <Appbar.Content
          title="Title"
          subtitle={subtitleChecked && 'Subtitle'}
        />
        {actionChecked && <Appbar.Action icon="magnify" />}
        {actionChecked && <Appbar.Action icon={MORE_ICON} onPress={() => {}} />}
      </Appbar.Header>
      <View>
        <Checkbox.Item
          label={'Subtitle'}
          status={subtitleChecked ? 'checked' : 'unchecked'}
          onPress={() => {
            setSubtitleChecked(!subtitleChecked);
          }}
        />
        <Checkbox.Item
          label={'Back'}
          status={backChecked ? 'checked' : 'unchecked'}
          onPress={() => {
            setBackChecked(!backChecked);
          }}
        />
        <Checkbox.Item
          label={'Action'}
          status={actionChecked ? 'checked' : 'unchecked'}
          onPress={() => {
            setActionChecked(!actionChecked);
          }}
        />
      </View>
    </View>
  );
};

export default AppbarDemo;
`;

export default AppbarCode