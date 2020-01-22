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
  img?: any;
}

export interface Team {
  id: string;
  name: string;
  img?: any;
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

export interface User {
  id: string;
  name: string;
  username: string;
}

//////

export interface Position {
  team: Team;
  matchesPlayed: number;
  matchesWon: number;
  matchesTied: number;
  matchesLost: number;
  totalPoints: number;
}