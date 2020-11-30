import { combineReducers } from 'redux';
import auth from './auth';


// bringing all the created reducers into the store
export default combineReducers({
    auth
});