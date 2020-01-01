import {GET_CURRENT_USER, LOADING} from "../constants/actions";

const initialState = {
    isLogined: false,
    name: '',
    token: ''
};

const user = (state=initialState, action)=>{
    switch(action.type){
        case LOADING:
            return {
                ...state,
                isLogined: true
            }
        case GET_CURRENT_USER:
            return {
                isLogined: false,
                name: action.payload.login,
                token: action.payload.token
            }
        default:
            return state
    }
};

export default user