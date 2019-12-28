
import React, { Component, useState } from 'react';
import {
  Animated,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Alert,
} from 'react-native';
import { MatchResultHeader } from './MatchResultHeader';
import { Match as MatchModel } from '../../types/models';
import { MatchEvent } from './MatchEvent';

const HEADER_MAX_HEIGHT = 230;

interface MatchProps {
  match: MatchModel;
}

export const Match: React.FC<MatchProps> = ({ match }) => {

  const [scrollY] = useState(new Animated.Value(0));

  const _renderScrollViewContent = () => {
    return (
      <View style={styles.scrollViewContent}>
        {match.events.map((event, i) => (
          <MatchEvent key={i} team={event.playersTeamId === match.local.id ? match.local : match.visitant} event={event} />
        ))}
      </View>
    );
  }

  return (
    <View style={styles.fill}>
      <ScrollView
        style={styles.fill}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }]
        )}
      >
        {_renderScrollViewContent()}

      </ScrollView>
      <MatchResultHeader match={match} scrollY={scrollY} />
    </View>
  );
}

const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
  scrollViewContent: {
    marginTop: HEADER_MAX_HEIGHT,
    padding: 20
  },
});