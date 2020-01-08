import Datastore from 'nedb-promises';
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
const commandsDB = new Datastore({ filename: 'data/commands.json', autoload: true });

export const getAllCommand = () => async dispatch => {
    try{
        let data
        await dispatch(loading());
        if(localStorage.getItem('jwt')){
            await setAuthHeader(localStorage.getItem('jwt'));
            const commands = await callApi('get', '/commands/getAll', null);
            data = commands.data
        }else{
            data = await commandsDB.find({});
        };
        await dispatch({
            type: GET_COMMANDS,
            payload: data
        })


    }catch(err){
        console.log(err)
    }
   
};
export const addCommand = (dt, func) => async dispatch => {
    try{
        let data
        func(1);
        await dispatch(loading());
        if(localStorage.getItem('jwt')){
            await setAuthHeader(localStorage.getItem('jwt'));
            const command = await callApi('post', '/commands/create', dt);
            data = command.data
        }else{
            data = await commandsDB.insert({...dt});
        }
        await dispatch({
            type: ADD_COMMANDS,
            payload: data
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
        await dispatch(loading());
        if(localStorage.getItem('jwt')){
            await setAuthHeader(localStorage.getItem('jwt'));
            callApi("post", `/commands/delete/${id}`, null );
        }else{
            await commandsDB.remove({_id: id})
        };
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
        if(localStorage.getItem('jwt')){
            await setAuthHeader(localStorage.getItem('jwt'));
            callApi("post", `/commands/update/${id}`, data );
        }else{
            await commandsDB.update({_id: id}, {...data})
        }   
        
        await dispatch({
            type: UPDATE_COMMAND,
            payload: {
                id,
                data
            }
        });
        
    }catch(err){
        console.log(err)
    }
};