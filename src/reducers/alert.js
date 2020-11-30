import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

const initial_state = [];

export default function(state = initial_state, action){
    const { type, payload } = action;
    switch(type){
        case SET_ALERT:
            return [...state, payload];
        case REMOVE_ALERT:
            return state.filter(alert => alert.id !== payload); // this will remove the alert from stack. This returns all alerts exept the one that matches the payload
        default:
            return state;       
    }
}

