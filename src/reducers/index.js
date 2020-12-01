import { combineReducers } from 'redux';
import auth from './auth';
import politico from './politico'


// bringing all the created reducers into the store
export default combineReducers({
    auth,
    politico
});