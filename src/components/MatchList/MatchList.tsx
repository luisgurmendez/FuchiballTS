import React from 'react';
import { Text, Alert, View, Image } from 'react-native';
import styled from 'styled-components/native';
import { Match, Team } from '../../types/models';
import { getMatchResult } from './utils';
import { NavigatorService } from '../../core/navigation';

interface TeamInfoProps {
  team: Team
}

const TeamInfo: React.FC<TeamInfoProps> = ({ team }) => {
  return (
    <View style={{ alignItems: 'flex-end', flexDirection: 'row', flexWrap: 'wrap' }}>
      <Image style={{ height: 30, width: 30 }} source={team.img}></Image>
      <Text style={{ fontSize: 20 }}>{team.name}</Text>
    </View>
  )
}

const Container = styled.ScrollView`
  width: 100%;
`
const MatchRowContainer = styled.TouchableOpacity`
  width: 100%;
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`

interface MatchProps {
  match: Match
}

const MatchRow: React.FC<MatchProps> = ({ match }) => {

  const matchResults = getMatchResult(match);

  return (
    <MatchRowContainer activeOpacity={0.6} onPress={() => NavigatorService.getInstance().navigate('Match', { match: match })}>
      <TeamInfo team={matchResults.winner.team} />
      <View style={{ flexDirection: 'row', alignItems: 'flex-end', flexWrap: 'wrap' }}>
        <Text>:</Text>
      </View>
      <TeamInfo team={matchResults.looser.team} />
    </MatchRowContainer>
  )
}

interface MacthListProps {
  matches: Match[]
}

export const MatchList: React.FC<MacthListProps> = ({ matches }) => {

  return (
    <Container>
      {matches.map((match, i) => (
        <MatchRow key={i} match={match} />
      ))}
    </Container>
  )
}