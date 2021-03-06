import { SEARCHING_POLITICOS, SEARCH_POLITICOS, GET_POLITICO, POLITICOS_ERROR, POLITICO_ERROR, CLEAR_POLITICOS } from '../actions/types';

const initial_state = {
    politico:null,
    politicos:[],
    loading: false,
    error:{}
}

export default function(state = initial_state, action){

    const { type, payload } = action 

    switch(type){

        case SEARCHING_POLITICOS:
            return{
                ...state,
                loading:true
            }

        case SEARCH_POLITICOS:
            return{
                ...state,
                politicos: payload,
                loading:false
            }

        case GET_POLITICO:
            return{
                ...state,
                politico: payload,
                loading: false
            }    

        case POLITICOS_ERROR:
        case POLITICO_ERROR:    
            return{
                ...state,
                loading:false,
                error:payload,
            }
            
        case CLEAR_POLITICOS:
            return{
                ...state,
                politico:null,
                politicos:[],
                loading:false
            } 
            
        default:
            return state;    

    }

}