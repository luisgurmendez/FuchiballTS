import React from 'react';
import styled from 'styled-components/native';
// @ts-ignore
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import { Text } from 'react-native';
import { COLORS } from 'constants/colors';

const TrophyContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 10px;
`

interface TrophyProps {
  color: 'gold' | 'silver' | 'bronze';
  amount: number;
}

export const Trophy: React.FC<TrophyProps> = ({ amount, color }) => {
  return (
    <TrophyContainer>
      <Icon name="trophy" size={20} color={COLORS[color]} />
      <Text>{amount}</Text>
    </TrophyContainer>
  )
}