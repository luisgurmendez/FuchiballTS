import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { teamA, teamB, teamC } from '../../dummyData';
import { Title, TeamBubbleList, Margin } from 'components'
import { LastMatch } from './LastMatch';
import { connect } from 'react-redux';
import { fetchPlayers } from 'actions/player';
import { ThunkDispatch } from 'redux-thunk';


export const HomeBase: React.FC<any> = props => {
  const teams = [teamA, teamB, teamC, teamA, teamA];

  useEffect(() => {
    console.log('HEREEE@222');
    console.log(props)
    const r = props.fetchPlayer();
    console.log(r);
  }, [])

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

export const Home = connect(
  () => ({}),
  (dispatch: ThunkDispatch<any, any, any>) => ({
    fetchPlayer: () => dispatch(fetchPlayers())
  })
)(HomeBase)