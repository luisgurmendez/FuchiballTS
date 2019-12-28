import React, { useState, useEffect } from 'react';
import { View, Alert, Text, Keyboard, TouchableOpacity } from 'react-native';
import { getUser, setUser, getTokens } from '../../core/storage';
import { user } from '../../dummyData';
import styled from 'styled-components/native';
import { SafeAreaView, withNavigation, NavigationInjectedProps } from 'react-navigation';
import { useTextInputValue } from '../../Utils/hooks';
import { Loader } from '../../components';
import { ErrorResponse } from '../../types/responses';
import { login } from '../../core/api';

const FormContainer = styled.View`
  flex: 2;
  margin-top: 20px;
`

const LogoContainer = styled.View`
  display: flex;
  align-items: center;
  flex: 1;
`

const Logo = styled.View`
  width: 200;
  height: 200;
  background-color: green;
`

const LoginContainer = styled.View`
  flex: 1;
  padding: 30px;
`

const TextInput = styled.TextInput`
  font-size: 20px
  padding: 10px 15px;
  border-width: 1;
  border-color: #eee;
  border-radius: 5px;
  margin-bottom: 10px;
`

const SubmitButton = styled.TouchableOpacity`
  background-color: #4684f0;
  padding: 15px;
  border-radius: 5px;
  text-align: center;
`

const LoginBase: React.FC<NavigationInjectedProps> = props => {

  const [username, handleUsernameChange] = useTextInputValue('');
  const [password, handlePasswordChange] = useTextInputValue('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setSubmitting] = useState(false);

  const handleSubmit = () => {
    setSubmitting(true);
    login(username, password).then((data: any) => {
      Alert.alert(JSON.stringify(data))
      props.navigation.navigate('Team');
    }).catch((e: ErrorResponse) => {
      setErrorMessage(e.message);
      setSubmitting(false);
    });
  }

  return (

    <LoginContainer as={SafeAreaView}>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <FormContainer>
        <TextInput onChange={handleUsernameChange} value={username} autoCapitalize='none' placeholder="Usuario" />
        <TextInput onChange={handlePasswordChange} value={password} secureTextEntry={true} autoCapitalize='none' placeholder="Contraseña" />
        <SubmitButton disabled={isSubmitting} activeOpacity={0.7} onPress={handleSubmit} >
          <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>{isSubmitting ? <Loader /> : 'Submit!'}</Text>
        </SubmitButton>
        <Text style={{ color: 'red' }}>{errorMessage}</Text>
      </FormContainer>
    </LoginContainer>
  )
}

export const Login = withNavigation(LoginBase)
