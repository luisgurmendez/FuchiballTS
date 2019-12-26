import React from 'react';
import { Text, Alert, View } from 'react-native';
import styled from 'styled-components/native';
import { Match } from '../../types/models';
import { getMatchResult } from './utils';
import { Border } from '../../components/Border/Border';

const Container = styled.ScrollView`
  width: 100%;
`

const MatchRowContainer = styled.View`
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
    <Border>
      <MatchRowContainer>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          <Text>{matchResults.winner.team.name}</Text>
          <Text>{matchResults.winner.result}</Text>
          <Text>{matchResults.byPenalties && `(${matchResults.winner.penaltyResult})`}</Text>
        </View>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          <Text>:</Text>
        </View>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          <Text>{matchResults.looser.result}</Text>
          <Text>{matchResults.byPenalties && `(${matchResults.looser.penaltyResult})`}</Text>
          <Text>{matchResults.looser.team.name}</Text>
        </View>
      </MatchRowContainer>
    </Border>

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