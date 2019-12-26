
import React, { useState } from 'react';
import {
  Animated,
  View,
} from 'react-native';
import styled from 'styled-components/native';
import { Match, Team } from '../../types/models';
import { MatchResult, getMatchResult, parseResult } from '../../components/MatchList/utils';

const HEADER_MAX_HEIGHT = 230;
const HEADER_MIN_HEIGHT = 100;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const TeamLogo = styled.Image`
  align-self: center;
  width: 80;
  height: 80;
`
const TeamName = styled.Text`
  align-self: center;
`

interface TeamInfoProps {
  scrollY: Animated.Value;
  team: Team;
}

const TeamInfo: React.FC<TeamInfoProps> = ({ scrollY, team }) => {

  const teamNameOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  })

  const teamLogoSize = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 0.6],
    extrapolate: 'clamp',
  })

  return (
    <View style={{ width: '30%', alignSelf: 'flex-start' }}>
      <TeamLogo
        as={Animated.Image}
        style={{ transform: [{ scale: teamLogoSize }] }}
        source={team.img}
      />
      <TeamName
        as={Animated.Text}
        numberOfLines={1}
        style={{ opacity: teamNameOpacity }}
      >
        {team.name}
      </TeamName>
    </View>
  );
}


const ResultContainer = styled.View`
  width: 40%;
  align-items: center;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`

interface ResultsProps {
  scrollY: Animated.Value;
  result: MatchResult;
}
const Result: React.FC<ResultsProps> = ({ scrollY, result }) => {

  const fontSize = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [40, 20],
    extrapolate: 'clamp',
  })

  const penaltySize = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [20, 10],
    extrapolate: 'clamp',
  })

  return (
    <ResultContainer>
      <Animated.Text style={{ fontSize: fontSize }}>
        {result.winner.result}
        {result.byPenalties &&
          <Animated.Text style={{ fontSize: penaltySize }}>
            {result.winner.penaltyResult}
          </Animated.Text>
        }
      </Animated.Text>
      <Animated.Text style={{ fontSize: fontSize }}>-</Animated.Text>
      <Animated.Text style={{ fontSize: fontSize }}>
        {result.looser.result}
        {result.byPenalties &&
          <Animated.Text style={{ fontSize: penaltySize }}>
            {result.looser.penaltyResult}
          </Animated.Text>
        }
      </Animated.Text>
    </ResultContainer>
  )
}

const Container = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding-top: 40;
  padding-left: 20;
  padding-right: 20;
  background-color: #FFF;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
`

const ResultsContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-self: center;
  width: 100%;
`

interface MatchResultHeaderProps {
  scrollY: Animated.Value;
  match: Match;
}

export const MatchResultHeader: React.FC<MatchResultHeaderProps> = ({ match, scrollY }) => {

  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: 'clamp',
  });

  const matchResult = getMatchResult(match)

  return (
    <Container as={Animated.View} style={{ flex: 1, borderWidth: 1, borderColor: 'lightgray', height: headerHeight }}>
      <ResultsContainer>
        <TeamInfo team={matchResult.winner.team} scrollY={scrollY} />
        <Result result={matchResult} scrollY={scrollY} />
        <TeamInfo team={matchResult.looser.team} scrollY={scrollY} />
      </ResultsContainer>
    </Container>
  )
}
