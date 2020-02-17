import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { FootballField } from 'components';
import { Match } from 'types/models';
import { formation433, mirrorFormation } from 'components/FootballField/formationUtils';

interface LastMatchProps {
  match?: Match
}
export const LastMatch: React.FC<LastMatchProps> = ({ match }) => {

  const [size, setSize] = useState(0);

  const handleLayout = (event: any) => {
    let { width } = event.nativeEvent.layout
    setSize(width);
  }

  return (
    <ScrollView onLayout={handleLayout} horizontal showsHorizontalScrollIndicator={false}>
      {size !== 0 &&
        <>
          <FootballField striped size={size} formation={formation433} />
          <FootballField striped size={size} formation={mirrorFormation(formation433)} formationColor='#e45c4d' />
        </>
      }
    </ScrollView>
  )
}
