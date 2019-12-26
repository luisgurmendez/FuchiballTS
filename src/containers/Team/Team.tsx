import React, { useEffect } from 'react';
import { Image } from 'react-native';
import styled from 'styled-components/native';
import { Shadow, MatchList } from '../../components';
import { match } from '../../dummyData';

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
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

const MatchListContainer = styled.View`
  padding: 0px 20px;  
  margin-bottom: 10px;
  width: 100%;
  flex: 1;
`

const TeamInfo: React.FC = props => {
  return (
    <TeamName>
      Trouville FC
    </TeamName>
  )
}

export const Team: React.FC<any> = props => {

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
      <MatchListContainer>
        <MatchList matches={[match, match]} />
      </MatchListContainer>
    </Container>
  )
}