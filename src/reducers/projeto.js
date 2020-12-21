import { 
    SEARCHING_PROJETOS,
    SEARCH_PROJETOS,
    PROJETOS_ERROR,
    GET_PROJETO,
    PROJETO_ERROR,
    CLEAR_PROJETOS 
 } from "../actions/types";

const initial_state = {
    projetos:[],
    projeto:null,
    loading: false,
    error:{}
}
export default function(state = initial_state, action){

    const { type, payload } = action;

    switch(type){

        case SEARCHING_PROJETOS:
            return{
                ...state,
                loading:true
            }

        case SEARCH_PROJETOS:
            return{
                ...state,
                projetos: payload,
                loading:false
            }

        case GET_PROJETO:
            return{
                ...state,
                projeto: payload,
                loading: false
            }    

        default:
            return state;    

    }

}