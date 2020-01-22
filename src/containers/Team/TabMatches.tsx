import React from 'react';
import { match, match2 } from '../../dummyData';
import styled from 'styled-components/native';
import { MatchList, Subtitle } from 'components';
import { ScrollView } from 'react-native';

const MatchListContainer = styled.View`
  padding: 0px 20px;  
  margin-bottom: 10px;
  width: 100%;
  flex: 1;
`

export const TabMatches: React.FC = () => {
  return (

    <ScrollView style={{ flex: 1, width: '100%' }}>
      <MatchListContainer>
        <Subtitle>Ultimos Partidos</Subtitle>
        <MatchList matches={[match, match, match2]} />
      </MatchListContainer>
    </ScrollView>
  )
}

