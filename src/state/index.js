import { combineReducers } from 'redux';
import hamburgerReducer from '../reducers/hamburgerReducer'

export default combineReducers({ 
    hamburgerMenu: hamburgerReducer
 });