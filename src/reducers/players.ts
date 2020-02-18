import { Player } from "models/player";
import { Normalized, normalize } from "./utils";
import { handleActions } from 'redux-actions';
import { playerActions } from "actions/player";

interface PlayersState {
  players: Normalized<Player>;
  isLoadingPlayer: boolean;
}

const initialState: PlayersState = {
  players: {
    byIds: {},
    allIds: [],
  },
  isLoadingPlayer: false
}

const reducer = handleActions({
  [playerActions.fetchPlayersRequest.toString()]: state => ({ ...state, isLoadingPlayer: true }),
  [playerActions.fetchPlayersSuccess.toString()]: (state, { payload: { players } }) => ({
    ...state,
    isLoadingPlayer: false,
    players: normalize<Player>(players as unknown as Player[])
  }),
  [playerActions.fetchPlayersFailure.toString()]: state => ({ ...state, isLoadingPlayer: false }),

}, initialState)

export default reducer;