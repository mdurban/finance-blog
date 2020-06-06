import { combineReducers } from 'redux';
import hamburgerReducer from '../reducers/hamburgerReducer'
import contactFormReducer from '../reducers/contactFormReducer'

export default combineReducers({
    hamburgerMenu: hamburgerReducer,
    contactForm: contactFormReducer
});