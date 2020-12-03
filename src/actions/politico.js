import { SEARCHING_POLITICOS, SEARCH_POLITICOS, GET_POLITICO, POLITICOS_ERROR, POLITICO_ERROR, CLEAR_POLITICOS } from './types';
import axios from 'axios';
import { setAlert } from './alert';


export const searchPoliticos = param => async dispatch => {
    try{

        dispatch({
            type:SEARCHING_POLITICOS,
            payload:null
        })

        const res = await axios.get(`/api/politico/search?param=${param}`);
        dispatch({
            type:SEARCH_POLITICOS,
            payload: res.data
        })

    }catch(err){
        dispatch({
            type: POLITICOS_ERROR,
            payload:{ msg: err.response.data.error, status: err.response.status }
        });
        dispatch({
            type: CLEAR_POLITICOS,
            payload:null
        });
    }
}


export const getPoliticoById = id => async dispatch => {
    try{

        dispatch({
            type:SEARCHING_POLITICOS,
            payload:null
        })

        const res = await axios.get(`/api/politico/${id}/get`);
        dispatch({
            type:GET_POLITICO,
            payload: res.data
        })
        
    }catch(err){
        dispatch({
            type: POLITICO_ERROR,
            //payload:{ msg: err.response.data.error, status: err.response.status }
        });
        dispatch({
            type: CLEAR_POLITICOS,
            payload:null
        });
    }
}
