import React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';
import { Position } from '../../types/models';

const Row = styled.View`
  border-top-width: 1;
  border-color: #F1F3F4;
  display: flex;
  flex-direction: row;
  padding: 10px;
`

const TeamLogo = styled.Image`
  align-self: center;
  width: 24;
  height: 24;
  margin-right: 10px;
`

const HeaderRow = styled(Row)`
  border-top-width: 0;
`

const Cell = styled.View<{ size?: number }>`
  flex: ${props => props.size !== undefined ? props.size : 1};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`

const PositionTableContainer = styled.View`
  background-color: white;
  border-radius: 10px;
  flex: 1;
`

const HeaderLabel = styled.Text`
  color: rgba(0,0,0,0.54);
`

const MarginRow = styled.View`
  height: 20px;
  width: 100%;
`

const RowsContainer = styled.ScrollView`
  flex: 1;
`

interface PositionTableProps {
  positions: Position[]
}

export const PositionTable: React.FC<PositionTableProps> = ({ positions }) => {

  const renderRows = () => {
    return positions.sort((a, b) => {
      if (a.totalPoints === b.totalPoints) {
        return 0
      }
      if (a.totalPoints > b.totalPoints) {
        return -1
      } else {
        return 1
      }
    }).map((p, i) => (
      <Row key={p.team.id}>
        <Cell style={{ marginRight: 10 }} size={6}>
          <Text style={{ marginRight: 10 }}>
            {i + 1}
          </Text>
          <TeamLogo source={p.team.img} />
          <Text style={{ flex: 1 }} numberOfLines={1}>{p.team.name}</Text>
        </Cell>
        <Cell><Text>{p.matchesPlayed}</Text></Cell>
        <Cell><Text>{p.matchesWon}</Text></Cell>
        <Cell><Text>{p.matchesTied}</Text></Cell>
        <Cell><Text>{p.matchesLost}</Text></Cell>
        <Cell><Text style={{ fontWeight: 'bold' }}>{p.totalPoints}</Text></Cell>
      </Row >
    ))
  }

  return (
    <PositionTableContainer>
      <HeaderRow>
        <Cell size={6}><HeaderLabel>Club</HeaderLabel></Cell>
        <Cell><HeaderLabel>PJ</HeaderLabel></Cell>
        <Cell><HeaderLabel>G</HeaderLabel></Cell>
        <Cell><HeaderLabel>E</HeaderLabel></Cell>
        <Cell><HeaderLabel>P</HeaderLabel></Cell>
        <Cell><HeaderLabel style={{ fontWeight: 'bold' }}>Pts</HeaderLabel></Cell>
      </HeaderRow>
      <RowsContainer>
        {renderRows()}
        <MarginRow />
      </RowsContainer>
    </PositionTableContainer>
  )
}
