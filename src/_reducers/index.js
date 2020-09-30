import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { cart } from './cart.reducers'

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  cart
});

export default rootReducer;