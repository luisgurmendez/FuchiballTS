import { Team } from "models/team";
import { Player } from "models/player";
import { MatchEvent, Match, Event } from "models/match";
import { User } from "models/user";
import { Position } from "components/PositionTable/PositionTable";

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

export const teamC: Team = {
  name: 'El Chivito',
  id: 'chivito',
};

export const player1: Player = {
  name: 'Luis',
  number: 3,
}

export const player2: Player = {
  name: 'Sebastian',
  number: 9,
  img: require('../assets/suarez.jpg')
}

export const player3: Player = {
  name: 'Otta',
  number: 11,
  img: require('../assets/suarez.jpg')
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

export const match2: Match = {
  local: teamA,
  visitant: teamC,
  events: matchEvents
}

export const user: User = {
  id: '1',
  name: 'Luis',
  username: 'luisgurmendez',
}

export const positions: Position[] = [{
  team: teamA,
  matchesPlayed: 2,
  matchesTied: 0,
  matchesWon: 2,
  matchesLost: 0,
  totalPoints: 6
}, {
  team: teamB,
  matchesPlayed: 2,
  matchesTied: 0,
  matchesWon: 0,
  matchesLost: 2,
  totalPoints: 2
}, {
  team: teamB,
  matchesPlayed: 2,
  matchesTied: 0,
  matchesWon: 0,
  matchesLost: 2,
  totalPoints: 2
}, {
  team: teamB,
  matchesPlayed: 2,
  matchesTied: 0,
  matchesWon: 0,
  matchesLost: 2,
  totalPoints: 1
}, {
  team: teamB,
  matchesPlayed: 2,
  matchesTied: 0,
  matchesWon: 0,
  matchesLost: 2,
  totalPoints: 0
}, {
  team: teamB,
  matchesPlayed: 2,
  matchesTied: 0,
  matchesWon: 0,
  matchesLost: 2,
  totalPoints: 0
}, {
  team: teamB,
  matchesPlayed: 2,
  matchesTied: 0,
  matchesWon: 0,
  matchesLost: 2,
  totalPoints: 0
}, {
  team: teamB,
  matchesPlayed: 2,
  matchesTied: 0,
  matchesWon: 0,
  matchesLost: 2,
  totalPoints: 0
}, {
  team: teamB,
  matchesPlayed: 2,
  matchesTied: 0,
  matchesWon: 0,
  matchesLost: 2,
  totalPoints: 0
}, {
  team: teamB,
  matchesPlayed: 2,
  matchesTied: 0,
  matchesWon: 0,
  matchesLost: 2,
  totalPoints: 0
}, {
  team: teamB,
  matchesPlayed: 2,
  matchesTied: 0,
  matchesWon: 0,
  matchesLost: 2,
  totalPoints: 0
}, {
  team: teamB,
  matchesPlayed: 2,
  matchesTied: 0,
  matchesWon: 0,
  matchesLost: 2,
  totalPoints: 0
}, {
  team: teamB,
  matchesPlayed: 2,
  matchesTied: 0,
  matchesWon: 0,
  matchesLost: 2,
  totalPoints: 0
}, {
  team: teamB,
  matchesPlayed: 2,
  matchesTied: 0,
  matchesWon: 0,
  matchesLost: 2,
  totalPoints: 0
}, {
  team: teamB,
  matchesPlayed: 2,
  matchesTied: 0,
  matchesWon: 0,
  matchesLost: 2,
  totalPoints: 0
}, {
  team: teamB,
  matchesPlayed: 2,
  matchesTied: 0,
  matchesWon: 0,
  matchesLost: 2,
  totalPoints: 0
}, {
  team: teamB,
  matchesPlayed: 2,
  matchesTied: 0,
  matchesWon: 0,
  matchesLost: 2,
  totalPoints: 0
}, {
  team: teamB,
  matchesPlayed: 2,
  matchesTied: 0,
  matchesWon: 0,
  matchesLost: 2,
  totalPoints: 0
}, {
  team: teamB,
  matchesPlayed: 2,
  matchesTied: 0,
  matchesWon: 0,
  matchesLost: 2,
  totalPoints: 0
}, {
  team: teamB,
  matchesPlayed: 2,
  matchesTied: 0,
  matchesWon: 0,
  matchesLost: 2,
  totalPoints: 0
}, {
  team: teamB,
  matchesPlayed: 2,
  matchesTied: 0,
  matchesWon: 0,
  matchesLost: 2,
  totalPoints: 0
}, {
  team: teamB,
  matchesPlayed: 2,
  matchesTied: 0,
  matchesWon: 0,
  matchesLost: 2,
  totalPoints: 0
}, {
  team: teamB,
  matchesPlayed: 2,
  matchesTied: 0,
  matchesWon: 0,
  matchesLost: 2,
  totalPoints: 0
}, {
  team: teamB,
  matchesPlayed: 2,
  matchesTied: 0,
  matchesWon: 0,
  matchesLost: 2,
  totalPoints: 0
}, {
  team: teamB,
  matchesPlayed: 2,
  matchesTied: 0,
  matchesWon: 0,
  matchesLost: 2,
  totalPoints: 0
}, {
  team: teamB,
  matchesPlayed: 2,
  matchesTied: 0,
  matchesWon: 0,
  matchesLost: 2,
  totalPoints: 0
}, {
  team: teamB,
  matchesPlayed: 2,
  matchesTied: 0,
  matchesWon: 0,
  matchesLost: 2,
  totalPoints: 0
}, {
  team: teamB,
  matchesPlayed: 2,
  matchesTied: 0,
  matchesWon: 0,
  matchesLost: 2,
  totalPoints: 0
}
]