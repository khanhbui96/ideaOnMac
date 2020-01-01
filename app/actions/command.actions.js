import callApi from '../utils/callApi';
import {
    GET_COMMANDS,
    ADD_COMMANDS,
    SELECT_COMMAND,
    DELETE_COMMAND,
    UPDATE_COMMAND,
    LOADING
} from '../constants/actions';
import setAuthHeader from '../utils/setAuthHeader';
import loading from './loading.action';

export const getAllCommand = () => async dispatch => {
    try{
        dispatch(loading());
        await setAuthHeader(localStorage.getItem('jwt'));
        const commands = await callApi('get', '/commands/getAll', null);
        await dispatch({
            type: GET_COMMANDS,
            payload: commands.data
        })
    }catch(err){
        console.log(err)
    }
   
};
export const addCommand = (data, func) => async dispatch => {
    try{
        func(1);
        dispatch(loading());
        await setAuthHeader(localStorage.getItem('jwt'));
        const command = await callApi('post', '/commands/create', data);
        await dispatch({
            type: ADD_COMMANDS,
            payload: command.data
        })

    }catch(err){
        func(0);
        alert(err.response.data)
    }
}
export const selectCommand = (command) => async dispatch => {
    try{
        await dispatch({
            type: SELECT_COMMAND,
            payload: {
                ...command
            }
        })
    }catch(err){
        console.log(err)
    }
};
export const deleteCommand = (id) => async dispatch => {
    try{
        await setAuthHeader(localStorage.getItem('jwt'));
        callApi("post", `/commands/delete/${id}`, null );
        await dispatch({
            type: DELETE_COMMAND,
            payload: id
        })
    }catch(err){
        console.log(err)
    }
};
export const updateCommand = (id, data) => async dispatch => {
    try{
        await setAuthHeader(localStorage.getItem('jwt'));
        callApi("post", `/commands/update/${id}`, data );
        await dispatch({
            type: UPDATE_COMMAND,
            payload: {
                id,
                data
            }
        })
    }catch(err){
        console.log(err)
    }
};