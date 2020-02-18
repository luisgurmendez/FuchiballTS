import { createActions } from 'redux-actions';
import { Dispatch } from 'redux';
import { Api } from 'core/Api';
import { Player } from 'models/player';
import { Logger } from 'core/Logger';

export const playerActions = createActions({
  FETCH_PLAYERS_REQUEST: undefined,
  FETCH_PLAYERS_SUCCESS: (players: Player[]) => ({ players }),
  FETCH_PLAYERS_FAILURE: (error: string) => ({ error })
})

export const fetchPlayers = () => async (dispatch: Dispatch): Promise<void> => {
  dispatch(playerActions.fetchPlayersRequest());
  try {
    const response = await Api.getInstance().get(`/player/all`);
    console.log(response)
    if (response.status) {
      dispatch(playerActions.fetchPlayersSuccess(response.data.data.players));
    }
  } catch (e) {
    Logger.error(e.message);
    dispatch(playerActions.fetchPlayersFailure(e));

  }
};

