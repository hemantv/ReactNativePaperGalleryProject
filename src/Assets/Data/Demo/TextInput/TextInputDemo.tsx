import React, {createRef, useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TextInput as RNTextInput,
  View,
} from 'react-native';
import {HelperText, TextInput} from 'react-native-paper';

type TextInputContainerProps = {
  children: React.ReactNode;
};

const TextInputContainer = ({children}: TextInputContainerProps) => {
  return Platform.OS === 'ios' ? (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={'padding'}
      keyboardVerticalOffset={160}>
      {children}
    </KeyboardAvoidingView>
  ) : (
    <View style={styles.container}>{children}</View>
  );
};

const TextInputDemo = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [lifeStory, setLifeStory] = useState('');
  const [netWorth, setNetWorth] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [emailAddressValid, setEmailAddressValid] = useState(true);

  let nameInputRef = createRef<RNTextInput>();
  let phoneNumberInputRef = createRef<RNTextInput>();
  let emailAddressInputRef = createRef<RNTextInput>();
  let lifeStoryInputRef = createRef<RNTextInput>();
  let netWorthInputRef = createRef<RNTextInput>();
  let passwordInputRef = createRef<RNTextInput>();
  let confirmPasswordInputRef = createRef<RNTextInput>();

  return (
    <TextInputContainer>
      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps={'always'}
        removeClippedSubviews={false}>
        <View style={styles.row}>
          <TextInput
            label={'Name'}
            left={<TextInput.Icon name={'account'} />}
            onSubmitEditing={() => phoneNumberInputRef.current?.focus()}
            ref={nameInputRef}
            returnKeyType={'next'}
            value={name}
            onChangeText={(text) => setName(text)}
          />
        </View>
        <View style={styles.row}>
          <TextInput
            label={'Phone number'}
            left={<TextInput.Icon name={'phone'} />}
            keyboardType={'phone-pad'}
            maxLength={14}
            onSubmitEditing={() => emailAddressInputRef.current?.focus()}
            ref={phoneNumberInputRef}
            returnKeyType={'next'}
            value={phoneNumber}
            onChangeText={(text) => setPhoneNumber(text)}
          />
          <HelperText type={'info'} style={styles.phoneNumberHelperText}>
            {phoneNumber.length}/14
          </HelperText>
        </View>
        <View style={styles.row}>
          <TextInput
            label={'Email'}
            left={<TextInput.Icon name={'email'} />}
            keyboardType={'email-address'}
            onSubmitEditing={() => lifeStoryInputRef.current?.focus()}
            ref={emailAddressInputRef}
            returnKeyType={'next'}
            value={emailAddress}
            onChangeText={(text) => setEmailAddress(text)}
            onBlur={() =>
              emailAddress.length > 0 &&
              setEmailAddressValid(emailAddress.includes('@'))
            }
          />
          <HelperText type="error" visible={!emailAddressValid}>
            Email address is invalid!
          </HelperText>
        </View>
        <View style={styles.row}>
          <TextInput
            mode={'outlined'}
            label={'Life story'}
            multiline={true}
            style={styles.lifeStory}
            onSubmitEditing={() => netWorthInputRef.current?.focus()}
            ref={lifeStoryInputRef}
            returnKeyType={'next'}
            value={lifeStory}
            onChangeText={(text) => setLifeStory(text)}
          />
          <HelperText type={'info'}>
            Keep it short, this is just a demo.
          </HelperText>
        </View>
        <View style={styles.row}>
          <TextInput
            mode={'outlined'}
            label={'Net Worth'}
            keyboardType={'number-pad'}
            onSubmitEditing={() => passwordInputRef.current?.focus()}
            ref={netWorthInputRef}
            returnKeyType={'next'}
            value={netWorth}
            onChangeText={(text) => setNetWorth(text)}
          />
        </View>
        <View style={styles.row}>
          <TextInput
            label={'Password'}
            right={
              <TextInput.Icon
                name={showPassword ? 'eye-off' : 'eye'}
                onPress={() => setShowPassword(!showPassword)}
              />
            }
            secureTextEntry={!showPassword}
            onSubmitEditing={() => confirmPasswordInputRef.current?.focus()}
            ref={passwordInputRef}
            returnKeyType={'next'}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <View style={styles.row}>
          <TextInput
            label={'Confirm Password'}
            secureTextEntry={true}
            ref={confirmPasswordInputRef}
            returnKeyType={'next'}
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
          />
        </View>
      </ScrollView>
    </TextInputContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  row: {
    margin: 8,
  },
  lifeStory: {
    height: 120,
  },
  phoneNumberHelperText: {
    alignSelf: 'flex-end',
  },
});

export default TextInputDemo;
