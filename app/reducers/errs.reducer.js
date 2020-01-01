import {GET_ERRS, RESET_ERRS} from '../constants/actions';

const initialState = {};

const errs = (state = initialState, action)=>{
    switch(action.type){
        case GET_ERRS:
            return {...action.payload}
        default:
            return state
    }
};
export default errs