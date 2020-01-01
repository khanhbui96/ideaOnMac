import callApi from '../utils/callApi';
import { GET_ERRS, GET_CURRENT_USER } from '../constants/actions';
import {getErrs} from './erros.actions'
import setAuthHeader from '../utils/setAuthHeader';
import loading from './loading.action';

export const getCurrentUser = () => async dispatch => {
    try{
        await setAuthHeader(localStorage.getItem('jwt'));
        await callApi('get', '/users', null);
    }catch(err){
        console.log(err)
    }
   
}
export const loginUser = (data, func1) => async dispatch=>{    
    try{
        await dispatch(loading());
        const User = await callApi('post', '/users/login', data);
        await dispatch({
            type: GET_CURRENT_USER,
            payload: User.data
        })
        await localStorage.setItem('jwt', User.data.token);
        await func1(User.data.type);
    }catch(err){
        await dispatch(getErrs(err.response.data))
    }

};
export const registerUser = (data, func) => async dispatch=>{
    try{
        await callApi('post', '/users/register', data)
        await func()
    }catch(err){
        await dispatch({
            type: GET_ERRS,
            payload: err.response.data
        })
    }
};
