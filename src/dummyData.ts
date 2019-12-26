import { Team, Player, MatchEvent, Event, Match, User } from "./types/models";

export const teamA: Team = {
  name: 'Trouville',
  id: 'trouva',
  img: require('../assets/laTrouva.png')
};

export const teamB: Team = {
  name: 'La banda del Chori',
  id: 'labanda',
  img: require('../assets/labandadelchori.png')
};

export const player1: Player = {
  name: 'Luis',
  number: 3,
}

export const player2: Player = {
  name: 'Sebastian',
  number: 9,
}

export const player3: Player = {
  name: 'Otta',
  number: 11,
}

export const player4: Player = {
  name: 'Gordo jero',
  number: 15,
}

export const matchEvents: MatchEvent[] = [
  { event: 'goal' as Event, min: 4, player: player1, playersTeamId: teamA.id },
  { event: 'red_card' as Event, min: 12, player: player2, playersTeamId: teamA.id },
  { event: 'goal' as Event, min: 17, player: player3, playersTeamId: teamB.id },
  { event: 'goal' as Event, min: 26, player: player4, playersTeamId: teamB.id },
  { event: 'yellow_card' as Event, min: 32, player: player2, playersTeamId: teamA.id },
  { event: 'goal' as Event, min: 37, player: player4, playersTeamId: teamB.id },
  { event: 'goal' as Event, min: 40, player: player1, playersTeamId: teamA.id },
  { event: 'yellow_card' as Event, min: 52, player: player2, playersTeamId: teamA.id },
  { event: 'red_card' as Event, min: 65, player: player4, playersTeamId: teamA.id },
  { event: 'goal' as Event, min: 77, player: player1, playersTeamId: teamA.id },
  { event: 'goal' as Event, min: 82, player: player3, playersTeamId: teamA.id },
]

export const match: Match = {
  local: teamA,
  visitant: teamB,
  events: matchEvents
}

export const user: User = {
  id: '1',
  name: 'Luis',
  username: 'luisgurmendez'
}