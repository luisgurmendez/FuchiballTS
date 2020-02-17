import React from 'react';
import { ScrollView } from 'react-native';
import { Margin } from 'components/Margin/Margin';
import { Team } from 'types/models';
import { NavigatorService } from 'core/navigation';
import { TeamBubble } from './TeamBubble';

interface TeamBubbleListProps {
  teams: Team[];
}

export const TeamBubbleList: React.FC<TeamBubbleListProps> = ({ teams }) => {

  const navigationService = NavigatorService.getInstance();

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ maxHeight: 90 }}>
      {teams.map(t => (
        <Margin marginRight='20' >
          <TeamBubble key={t.id} team={t} onPress={() => navigationService.navigate('Team', { team: t })} />
        </Margin>
      ))}
    </ScrollView>
  )
}