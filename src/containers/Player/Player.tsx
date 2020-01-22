import React from 'react';
import { View, Text } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import { Player as PlayerModel } from '../../types/models';

interface PlayerProps {
  player: PlayerModel;
}

export const Player: React.FC<NavigationInjectedProps<PlayerProps>> = props => {


  return (
    <View>
      <Text>{props.navigation.state.params!.player.name}</Text>
    </View>
  )
}
