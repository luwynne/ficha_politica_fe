import {v4 as uuid} from "uuid";
import { SET_ALERT, REMOVE_ALERT } from './types'


export const setAlert = (msg, alert_type, timeout = 5000) => dispatch => { 
    const id = uuid(); // random long string
    // this the action dispatched
    dispatch({
        type:SET_ALERT,
        payload: {msg, alert_type, id}
    });

    setTimeout(() => dispatch({
        type: REMOVE_ALERT,
        payload:id
    }), timeout);
};