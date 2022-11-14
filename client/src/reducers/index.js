import { combineReducers } from 'redux';
import auth from './auth';
import product from './products';
import order from './orders';
 
export default combineReducers({
  auth,
  product,
  order
});
