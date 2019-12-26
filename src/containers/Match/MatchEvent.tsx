import React from 'react';
import { MatchEvent as MatchEventModel, Team } from '../../types/models';
import styled from 'styled-components/native';
import { Shadow } from '../../components';
import { ShadowProps } from '../../components/Shadow/Shadow';

import { Text, View } from 'react-native';
// @ts-ignore
import Icon from 'react-native-vector-icons/dist/FontAwesome5';

const Container = styled.View<ShadowProps>`
  width: 100%;
  background-color: white;
  margin-bottom: 30px;
  border-radius: 10px;
`

const Header = styled.View`
  border-bottom-color: lightgrey;
  border-bottom-width: 1px;
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const EventText = styled.Text`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 14px;
`

const MinuteText = styled.Text`
  color: gray;
  font-weight: bold;
`

const TeamLogo = styled.Image`
  align-self: center;
  width: 60;
  height: 60;
`

interface MatchEventProps {
  event: MatchEventModel;
  team: Team;
}
const getEventLabel = (event: MatchEventModel['event']) => {
  switch (event) {
    case 'goal':
      return 'GOOOOOOOLL!'
    case 'yellow_card':
      return 'Tarjeta Amarilla'
    case 'red_card':
      return 'Tarjeta Roja'
  }
}
interface CardProps {
  color: 'red' | 'yellow'
}

const Card = styled.View<CardProps>`
margin-right: 20;
background-color: ${props => props.color === 'red' ? '#e51c24' : '#ffeb3a'};
height: 20;
width: 14;
border-radius: 2;
transform: rotate(20deg);
`

const Subtext = styled.Text`
  color: #555;
`

const getEventIcon = (event: MatchEventModel['event']) => {

  switch (event) {
    case 'goal':
      return <Icon style={{ marginRight: 20 }} name="futbol" size={20} color="#555" />
    case 'yellow_card':
      return <Card color='yellow' />
    case 'red_card':
      return <Card color='red' />
  }
  return <></>
}

export const MatchEvent: React.FC<MatchEventProps> = ({ event, team }) => {

  return (
    <Container as={Shadow} shadowRadius={5} shadowOpacity={0.3} >
      <Header>
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          {getEventIcon(event.event)}
          <EventText>{getEventLabel(event.event)}</EventText>
        </View>
        <MinuteText>{event.min}'</MinuteText>
      </Header>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20, width: '100%' }}>
        <View>
          <Text>{event.player.name}</Text>
          <Subtext>{`${team.name} #${event.player.number}`}</Subtext>
        </View>
        <TeamLogo source={team.img} />
      </View>
    </Container>
  )
}


