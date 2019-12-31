import React from 'react';
import { PositionTable } from '../../components';
import { positions } from '../../dummyData';
import { View } from 'react-native';

export const TabPositions: React.FC = props => {
  return (
    <View style={{ paddingHorizontal: 20, flex: 1, width: '100%' }}>
      <PositionTable positions={positions} />
    </View>
  )
}