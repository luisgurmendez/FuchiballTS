import React from 'react';
import styled from 'styled-components/native';
import { Team } from 'types/models';
import { Trophy } from 'components';

const TeamAchievementsContainer = styled.View`
  padding: 10px;
  display: flex;
  flex-direction: row;
`

interface TeamAchievementsProps {
  team: Team;
}

export const TeamAchievements: React.FC<TeamAchievementsProps> = () => {
  const randomNum = () => Math.round(Math.random() * 5);
  return (
    <TeamAchievementsContainer>
      <Trophy amount={randomNum()} color="gold" />
      <Trophy amount={randomNum()} color="silver" />
      <Trophy amount={randomNum()} color="bronze" />
    </TeamAchievementsContainer>
  )
}

