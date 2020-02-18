import { combineReducers } from 'redux';
import playerReducer from 'reducers/players'
const rootReducer = combineReducers({
  players: playerReducer
});
export default rootReducer;
