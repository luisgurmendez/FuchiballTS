import React from 'react';
import { SafeAreaView } from 'react-navigation';
import { PositionTable } from '../components/PositionTable/PositionTable';
import { positions } from '../dummyData';

export const Test: React.FC = props => {

  return (

    <SafeAreaView style={{ flex: 1 }}>
      <PositionTable positions={positions} />
    </SafeAreaView>
  )
}