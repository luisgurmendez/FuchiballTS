import React from 'react';
// @ts-ignore
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import { View } from 'react-native';
import styled from 'styled-components/native';

const DefaultPlayerAvatarWrapper = styled.View`
  height: 120;
  border-top-left-radius: 15;
  display: flex;
  justify-content: center;
  align-items: center; 
  border-top-right-radius: 15; 
  background-color: #eee; 
`
export const DefaultPlayerAvatar: React.FC = () => {
  return (
    <DefaultPlayerAvatarWrapper>
      <Icon name="user-circle" size={50} color="#dddddd" />
    </DefaultPlayerAvatarWrapper>
  )
}