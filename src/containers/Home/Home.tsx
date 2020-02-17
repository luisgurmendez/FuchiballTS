import React from 'react';
import { SafeAreaView } from 'react-native';
import { teamA, teamB, teamC } from '../../dummyData';
import { Title, TeamBubbleList, Margin } from 'components'
import { LastMatch } from './LastMatch';

export const Home: React.FC = () => {
  const teams = [teamA, teamB, teamC, teamA, teamA];

  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 20 }}>
      <Title>Mis Equipos:</Title>
      <TeamBubbleList teams={teams} />
      <Margin marginTop="15">
        <Title>Ultimo partido:</Title>
        <LastMatch />
      </Margin>
    </SafeAreaView>
  )
}
