import Axios from 'axios';
import {
   SEARCHING_PROJETOS,
   SEARCH_PROJETOS,
   PROJETOS_ERROR,
   GET_PROJETO,
   PROJETO_ERROR,
   CLEAR_PROJETOS, 
   GET_POLITICO
} from './types';

export const searchProjetos = param => async dispatch => {

    try{

        dispatch({
            type:SEARCHING_PROJETOS,
            payload:null
        })

        const res = await Axios.get(`/api/projeto/search?param=${param}`);
        dispatch({
            type:SEARCH_PROJETOS,
            payload: res.data
        })

    }catch(err){
        dispatch({
            type: PROJETOS_ERROR,
            payload:{ msg: err.response.data.error, status: err.response.status }
        });
        dispatch({
            type: CLEAR_PROJETOS,
            payload:null
        });
    }

}

export const getProjectById = id => async dispatch => {

    try{

        dispatch({
            type:SEARCHING_PROJETOS,
            payload:null
        })

        const res = await Axios.get(`/api/projeto/${id}/get`);

        dispatch({
            type:GET_PROJETO,
            payload:res.data
        })

    }catch(err){
        dispatch({
            type: PROJETOS_ERROR,
            payload:{ msg: err.response.data.error, status: err.response.status }
        });
        dispatch({
            type: CLEAR_PROJETOS,
            payload:null
        });
    }

}