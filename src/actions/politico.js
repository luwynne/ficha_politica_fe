import { SEARCHING_POLITICOS, SEARCH_POLITICOS, POLITICOS_ERROR, CLEAR_POLITICOS } from './types';
import axios from 'axios';
import { setAlert } from './alert';


export const searchPoliticos = param => async dispatch => {
    //try{

        dispatch({
            type:SEARCHING_POLITICOS,
            payload:null
        })

        const res = await axios.get(`/api/politico/search?param=${param}`);
        console.log(res.data)
        dispatch({
            type:SEARCH_POLITICOS,
            payload: res.data
        })

    /*}catch(err){
        dispatch({
            type: POLITICOS_ERROR,
            payload:{ msg: err.response.statusText, status: err.response.status }
        });
    }*/
}
