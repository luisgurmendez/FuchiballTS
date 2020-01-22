import React from 'react';
import styled from "styled-components/native";
import { Team } from '../../types/models';
import { Text } from 'react-native';
import { TeamLogo } from './TeamLogo';

const TeamBubbleContainer = styled.TouchableOpacity`
  display:flex;
  flex-direction: column;
  align-items: center;
  height: 100px;
`

interface TeamBubbleProps {
  team: Team;
  onPress?: (team: Team) => void;
}

export const TeamBubble: React.FC<TeamBubbleProps> = ({ team, onPress }) => {

  const handlePressTeam = () => {
    if (onPress) {
      onPress(team);
    }
  }

  return (
    <TeamBubbleContainer onPress={handlePressTeam} activeOpacity={onPress !== undefined ? 0.7 : 1}>
      <TeamLogo logo={team.img} size={60} />
      <Text>{team.name}</Text>
    </TeamBubbleContainer>
  )
}
