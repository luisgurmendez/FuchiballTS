import React, { useState } from 'react';
import { Alert, Text } from 'react-native';
import styled from 'styled-components/native';
import { SafeAreaView, withNavigation, NavigationInjectedProps } from 'react-navigation';
import { useTextInputValue } from '../../Utils/hooks';
import { TextInput, SubmitButton } from '../../components/Forms';

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

const RegisterBase: React.FC<NavigationInjectedProps> = props => {

  const [username, handleUsernameChange] = useTextInputValue('');
  const [password, handlePasswordChange] = useTextInputValue('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setSubmitting] = useState(false);

  const handleSubmit = () => {
    // setSubmitting(true);
    // login(username, password).then((data: any) => {
    //   Alert.alert(JSON.stringify(data))
    //   props.navigation.navigate('Team');
    // }).catch((e: ErrorResponse) => {
    //   setErrorMessage(e.message);
    //   setSubmitting(false);
    // });
  }

  return (
    <LoginContainer as={SafeAreaView}>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <FormContainer>
        <TextInput onChange={handleUsernameChange} value={username} autoCapitalize='none' placeholder="Usuario" />
        <TextInput onChange={handlePasswordChange} value={password} secureTextEntry={true} autoCapitalize='none' placeholder="Contraseña" />
        <TextInput onChange={handlePasswordChange} value={password} secureTextEntry={true} autoCapitalize='none' placeholder="Repetir Contraseña" />
        <SubmitButton title="Registarme" loading={isSubmitting} disabled={isSubmitting} activeOpacity={0.7} onPress={handleSubmit} />
        <Text style={{ color: 'red' }}>{errorMessage}</Text>
      </FormContainer>
    </LoginContainer>
  )
}

export const Register = withNavigation(RegisterBase)
