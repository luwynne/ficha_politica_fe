import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import politico from './politico';
import projeto from './projeto';


// bringing all the created reducers into the store
export default combineReducers({
    alert,
    auth,
    politico,
    projeto
});