import React, { useState } from 'react';
import { Image, View } from 'react-native';
import styled from 'styled-components/native';
import { Shadow } from '../../components';
import { TeamTabs } from './TeamTabs';
import { TabMatches } from './TabMatches';
import { TabPlayers } from './TabPlayers';
import { TabPositions } from './TabPositions';
import { NavigationInjectedProps } from 'react-navigation';
import { Team as TeamModel } from '../../types/models';
import { TeamAchievements } from 'components';
import { TeamLogo } from 'components/Team/TeamLogo';

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

const TeamLogoContainer = styled(Shadow)`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  background-color: white;
  position: relative;
  top: -60px;
  border-width: 2px
  border-color: lightgray;
`

const TeamInfoContainer = styled.View`
  width: 100%;
  padding: 10px 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
`

const TeamName = styled.Text`
  font-size: 22px;
  margin-top: -60px;
`

interface TeamProps {
  team: TeamModel;
}

export const Team: React.FC<NavigationInjectedProps<TeamProps>> = ({ navigation: { state: { params } } }) => {
  const [tab, setTab] = useState(0);
  const team = params!.team;

  const tabs = [{
    index: 0,
    title: 'Partidos',
    screen: TabMatches
  },
  {
    index: 1,
    title: 'Jugadores',
    screen: TabPlayers
  }, {
    index: 2,
    title: 'Posiciones',
    screen: TabPositions
  }]

  const SelectedTab = tabs[tab].screen

  return (
    <Container>
      <PortraitImageContainer>
        <Image style={{ flex: 1, width: '102%', backgroundColor: 'black' }} resizeMode="cover" source={require('../../../assets/laTrouvaPortada.png')} />
      </PortraitImageContainer>
      <TeamInfoContainer>
        <View style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'row' }}>
          <TeamLogoContainer>
            <TeamLogo rounded size={116} logo={team.img} />
          </TeamLogoContainer>
          <TeamAchievements team={team} />
        </View>
        <TeamName>
          {team.name}
        </TeamName>
      </TeamInfoContainer>
      <TeamTabs selectedTabIndex={tab} tabs={tabs} onTabSelected={(tab: number) => { setTab(tab) }} />
      <SelectedTab />
    </Container>
  )
}