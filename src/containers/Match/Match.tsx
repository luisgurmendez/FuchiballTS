
import React, { useState } from 'react';
import {
  Animated,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { MatchResultHeader } from './MatchResultHeader';
import { Match as MatchModel } from '../../types/models';
import { MatchEvent } from './MatchEvent';
import { NavigationInjectedProps } from 'react-navigation';

const HEADER_MAX_HEIGHT = 230;

interface MatchProps {
  match: MatchModel;
}

export const Match: React.FC<NavigationInjectedProps<MatchProps>> = ({ navigation: { state: { params } } }) => {

  const match = params?.match;
  const [scrollY] = useState(new Animated.Value(0));

  if (match === undefined) {
    // TODO!
    return (
      <Text>
        No se encontro el partido seleccionado.
    </Text>
    )
  }

  const _renderScrollViewContent = () => {
    if (match !== undefined) {
      return (
        <View style={styles.scrollViewContent}>
          {match.events.map((event, i) => (
            <MatchEvent key={i} team={event.playersTeamId === match.local.id ? match.local : match.visitant} event={event} />
          ))}
        </View>
      );
    }
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