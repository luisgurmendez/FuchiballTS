import React, { useEffect, useState } from 'react';
import { Image, View, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { Shadow } from '../../components';
import { TeamTabs } from './TeamTabs';
import { TabMatches } from './TabMatches';
import { TabPlayers } from './TabPlayers';

const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  flex-direction: column
  align-items: center;
  position: relative;
`

const PortraitImageContainer = styled.View`
  width: 100%;
  height: 20%;
  background-color: black;
`

const Avatar = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  background-color: white;
  position: absolute;
  border-width: 2px
  border-color: lightgray;
`

const TeamInfoContainer = styled.View`
  width: 100%;
  padding: 10px 20px;
  background-color: white;
`

const TeamName = styled.Text`
  font-size: 22px;
  margin-top: 60px;
`

const TeamInfo: React.FC = props => {
  return (
    <TeamName>
      Trouville FC
    </TeamName>
  )
}


export const Team: React.FC<any> = props => {
  const [tab, setTab] = useState(0);

  const tabs = [{
    index: 0,
    title: 'Partidos',
    screen: TabMatches
  },
  {
    index: 1,
    title: 'Jugadores',
    screen: TabPlayers
  }]

  const SelectedTab = tabs[tab].screen

  return (
    <Container>
      <PortraitImageContainer>
        <Image style={{ flex: 1, width: '102%', backgroundColor: 'black' }} resizeMode="cover" source={require('../../../assets/laTrouvaPortada.png')} />
      </PortraitImageContainer>
      <TeamInfoContainer>
        <Shadow>
          <Avatar style={{ transform: [{ translateY: -60 }] }} source={require('../../../assets/laTrouva.png')} />
        </Shadow>
        <TeamInfo />
      </TeamInfoContainer>
      <TeamTabs selectedTabIndex={tab} tabs={tabs} onTabSelected={(tab: number) => { setTab(tab) }} />
      <ScrollView style={{ flex: 1, width: '100%' }}>
        <SelectedTab />
      </ScrollView>
    </Container>

  )
}