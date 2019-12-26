export enum Event {
  goal = 'goal',
  penaltyGoal = 'penalty_goal',
  penaltyMiss = 'penalty_miss',
  redCard = 'red_card',
  yellowCard = 'yellow_card'
}

export interface Player {
  name: string;
  number: number;
}

export interface Team {
  id: string;
  name: string;
  img: any;
}

export interface MatchEvent {
  event: Event;
  min: number;
  player: Player;
  playersTeamId: string;
}

export interface Match {
  local: Team;
  visitant: Team;
  events: MatchEvent[]
}

