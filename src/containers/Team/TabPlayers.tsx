import React from 'react';
import { Player } from '../../types/models'
import { Shadow, DefaultPlayerAvatar } from '../../components';
import styled from 'styled-components/native';
import { View, Text } from 'react-native';
import { player1, player2, player3, player4 } from '../../dummyData';

const PlayerCardContainer = styled.View`
  height: 200;
  margin-left: 10px;
  margin-bottom: 10px;
  background-color: white;
  border-radius: 15px;
  width: 30%;
`

const PlayerImage = styled.Image`
  height: 120;
  width: 100%;
  border-top-left-radius: 15;
  border-top-right-radius: 15;
`

const PlayerInfoContainer = styled.View`
  padding: 10px;
  display: flex;
  flex-direction: column;
`

interface PlayerCardProps {
  player: Player;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ player }) => {

  return (
    <PlayerCardContainer as={Shadow}>
      {player.img ?
        <PlayerImage source={player.img} />
        :
        <DefaultPlayerAvatar />
      }
      <PlayerInfoContainer>
        <Text>{player.name}</Text>
        <Text>#{player.number}</Text>
      </PlayerInfoContainer>
    </PlayerCardContainer>
  )
}

const TabPlayersContainer = styled.View`
  padding: 0px 20px;  
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  flex-direction: row;
`

export const TabPlayers: React.FC = props => {

  return (
    <TabPlayersContainer>
      <View style={{ height: 20, width: '100%' }} />
      <PlayerCard player={{ number: 3, name: 'luis' }} />
      <PlayerCard player={{ number: 3, name: 'luis' }} />
      <PlayerCard player={player1} />
      <PlayerCard player={player2} />
      <PlayerCard player={player3} />
      <PlayerCard player={player4} />

      <PlayerCard player={{ number: 3, name: 'luis' }} />
      <PlayerCard player={{ number: 3, name: 'luis' }} />
      <PlayerCard player={{ number: 3, name: 'luis' }} />
      <PlayerCard player={{ number: 3, name: 'luis' }} />
      <PlayerCard player={{ number: 3, name: 'luis' }} />
      <PlayerCard player={{ number: 3, name: 'luis' }} />
    </TabPlayersContainer>
  )
}
