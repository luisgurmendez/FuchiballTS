import React from 'react';
import { Text, Alert, View, Image } from 'react-native';
import styled from 'styled-components/native';
import { Match, Team } from '../../types/models';
import { getMatchResult } from './utils';
import { NavigatorService } from '../../core/navigation';
import { TeamLogo } from 'components/Team/TeamLogo';
import { Margin } from 'components';

interface TeamInfoProps {
  team: Team;
  inverted?: boolean;
}

const TeamInfo: React.FC<TeamInfoProps> = ({ inverted, team }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' }}>
      {!inverted ?
        <>
          <Margin marginRight='10'>
            <TeamLogo size={30} logo={team.img} />
          </Margin>
          <Text style={{ fontSize: 18 }}>{team.name}</Text>
        </>
        :
        <>
          <Text style={{ fontSize: 18, marginRight: 10 }}>{team.name}</Text>
          <TeamLogo size={30} logo={team.img} />
        </>
      }
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
      align-items: center;
    `

interface MatchProps {
  match: Match
}

const MatchRow: React.FC<MatchProps> = ({ match }) => {

  const matchResults = getMatchResult(match);
  const navigatorService = NavigatorService.getInstance();

  return (
    <MatchRowContainer activeOpacity={0.6} onPress={() => navigatorService.navigate('Match', { match: match })}>
      <TeamInfo team={matchResults.winner.team} />
      <View style={{ marginHorizontal: 10, flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' }}>
        <Text style={{ fontSize: 18 }}>{matchResults.winner.result}</Text>
        <Text>-</Text>
        <Text style={{ fontSize: 18 }}>{matchResults.looser.result}</Text>
      </View>
      <TeamInfo inverted team={matchResults.looser.team} />
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