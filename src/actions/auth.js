import axios from 'axios';
import { setAlert } from './alert';
import setAuthToken from '../utils/setAuthToken';

import {
    REMOVE_ALERT,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_PROFILE
 } from './types';


 // Login user
export const login = (email, password) => async dispatch => {
    const config = {
        headers:{
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({email, password});

    try{
        const res = await axios.post('/api/auth/login', body, config);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data 
        });
        dispatch(loadUser());
    }catch(err){
        const errors = err.response.data.error;
        if(errors){
            if(Array.isArray(errors)){
                errors.forEach(error => dispatch(setAlert(error,'danger')));
            }else{
                dispatch(setAlert(errors,'danger'))
            }  
        }
        dispatch({
            type: LOGIN_FAIL
        });
    }
};

// Logout / Clear profile
export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT
    });
};

// Load user
export const loadUser = () => async dispatch => {
    if(localStorage.token){
        setAuthToken(localStorage.token);
    }
    try{
        const res = await axios.get('/api/auth/logged_user');
        dispatch({
            type:USER_LOADED,
            payload: res.data
        });
    }catch(err){
        dispatch({
            type:AUTH_ERROR
        })
    }
};