import React from 'react';
import { match } from '../../dummyData';
import styled from 'styled-components/native';
import { MatchList } from '../../components';
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
        <MatchList matches={[match, match]} />
      </MatchListContainer>
    </ScrollView>
  )
}

