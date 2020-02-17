import React from 'react';
import { SafeAreaView } from 'react-navigation';
import { PositionTable } from '../components/PositionTable/PositionTable';
import { positions } from '../dummyData';
import { TournamentBrackets } from 'components/TournamentBrackets/TournamentBrackets';
import { View } from 'react-native';
import { FootballField } from 'components';
import { formation433 } from 'components/FootballField/formationUtils';
import { HorizontalTabbedScrollView } from 'components/HorizontalTabbedScrollView/HorizontalTabbedScrollView';

export const Test: React.FC = props => {

  return (

    <SafeAreaView style={{ flex: 1 }}>
      {/* <View style={{ borderWidth: 1, borderColor: 'blue', flex: 1 }}>
        <TournamentBrackets />
      </View>
      <View style={{ borderWidth: 1, borderColor: 'blue', flex: 1 }}>
        <TournamentBrackets />
      </View>
      <View style={{ borderWidth: 1, borderColor: 'blue', flex: 1 }}>
        <TournamentBrackets />
      </View>
      <View style={{ borderWidth: 1, borderColor: 'blue', flex: 1 }}>
        <TournamentBrackets />
      </View> */}

      {/* <FootballField formation={formation433} /> */}
      <HorizontalTabbedScrollView>
        <View style={{ width: 400, height: 200, backgroundColor: 'red', marginLeft: 5 }} />
        <View style={{ width: 400, height: 200, backgroundColor: 'red', marginLeft: 5 }} />
        <View style={{ width: 400, height: 200, backgroundColor: 'red', marginLeft: 5 }} />
        <View style={{ width: 400, height: 200, backgroundColor: 'red', marginLeft: 5 }} />
        <View style={{ width: 400, height: 200, backgroundColor: 'red', marginLeft: 5 }} />
        <View style={{ width: 400, height: 200, backgroundColor: 'red', marginLeft: 5 }} />
        <View style={{ width: 400, height: 200, backgroundColor: 'red', marginLeft: 5 }} />
        <View style={{ width: 400, height: 200, backgroundColor: 'red', marginLeft: 5 }} />
        <View style={{ width: 400, height: 200, backgroundColor: 'red', marginLeft: 5 }} />

      </HorizontalTabbedScrollView>
    </SafeAreaView>
  )
}