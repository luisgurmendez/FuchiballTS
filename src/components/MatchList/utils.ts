import { Match, Team } from "../../types/models";

interface TeamResult {
  team: Team;
  result: number;
  penaltyResult?: number;
}

export interface MatchResult {
  tied: boolean;
  byPenalties: boolean;
  winner: TeamResult
  looser: TeamResult
}

export function parseResult(result: TeamResult): string {
  return result.penaltyResult !== undefined ? `${result.result} (${result.penaltyResult})` : `${result.result}`;
}

export function getMatchResult(match: Match): MatchResult {

  let localTeamGoals = 0;
  let visitanTeamGoals = 0;

  let localTeamPenaltyGoal = 0;
  let visitanTeamPenaltyGoal = 0;

  match.events.forEach(event => {

    if (event.event === 'goal') {
      if (event.playersTeamId === match.local.id) {
        localTeamGoals += 1;
      } else {
        visitanTeamGoals += 1;
      }
    }

    if (event.event === 'penalty_goal') {
      if (event.playersTeamId === match.local.id) {
        localTeamPenaltyGoal += 1;
      } else {
        visitanTeamPenaltyGoal += 1;
      }
    }
  });

  let winner: TeamResult = {
    team: match.local,
    result: localTeamGoals,
    penaltyResult: localTeamPenaltyGoal
  };

  let looser: TeamResult = {
    team: match.visitant,
    result: visitanTeamGoals,
    penaltyResult: visitanTeamPenaltyGoal
  }

  if (localTeamGoals + localTeamPenaltyGoal < visitanTeamGoals + visitanTeamPenaltyGoal) {
    // switch winner <--> looser
    let tmpLooser = { ...looser };
    looser = { ...winner };
    winner = { ...tmpLooser }
  }

  return {
    tied: localTeamGoals === visitanTeamGoals,
    byPenalties: localTeamGoals === visitanTeamGoals && (localTeamPenaltyGoal !== 0 || visitanTeamPenaltyGoal !== 0),
    winner,
    looser
  }

}