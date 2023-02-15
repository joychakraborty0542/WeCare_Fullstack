import { combineReducers } from 'redux';
import coach from './coach';
import user from './user';
import booking from './booking';

const rootReducer = combineReducers({
  coach,
  user,
  booking
})

export default rootReducer;