import Datastore from 'nedb-promises';
import callApi from '../utils/callApi';
import {
        GET_DEFINE_LEVELS,
        ADD_DEFINE_LEVEL,
        DELETE_DEFINE_LEVEL,
        SELECT_DEFINE_LEVEL,
        UPDATE_DEFINE_LEVEL, 
        LOADING
    } from '../constants/actions';
import setAuthHeader from '../utils/setAuthHeader';
import {getErrs} from './erros.actions';
import loading from './loading.action';
const defineLevelsDB = new Datastore({ filename: 'data/defineLevels.json', autoload: true });

export const getAll = () => async dispatch => {
    try{
        let data
        await dispatch(loading());
        if(localStorage.getItem('jwt')){
            await setAuthHeader(localStorage.getItem('jwt'));
            const defineLevels = await callApi('get', '/defineLevels/getAll', null);
            data = defineLevels.data
        }else{
            data = await defineLevelsDB.find({});
        };
        await dispatch({
            type: GET_DEFINE_LEVELS,
            payload: data
        })

    }catch(err){
        console.log(err)
    }
   
};
export const addDefineLevel = (dt, func) => async dispatch => {
    try{    
        let data
        func(false);
        await dispatch(loading());
        if(localStorage.getItem('jwt')){
            await setAuthHeader(localStorage.getItem('jwt'));
            const defineLevel = await callApi('post', '/defineLevels/create', dt);
            data = defineLevel.data
        }else{
            data = await defineLevelsDB.insert({...dt});
        }
        await dispatch({
            type: ADD_DEFINE_LEVEL,
            payload: data
        })
      
    }catch(err){
        func(true);
        dispatch(getErrs(err.response.data))
    }  
};
export const deleteDefineLevel = (id) => async dispatch => {
    try{
        await dispatch(loading());
        if(localStorage.getItem('jwt')){
            await setAuthHeader(localStorage.getItem('jwt'));
            callApi("post", `/defineLevels/delete/${id}`, null );
        }else{
            await defineLevelsDB.remove({_id: id})
        };
        await dispatch({
            type: DELETE_DEFINE_LEVEL,
            payload: id
        })
    }catch(err){
        console.log(err)
    }
};
export const updateDefineLevel = (id, data) => async dispatch => {
    try{
        if(localStorage.getItem('jwt')){
            await setAuthHeader(localStorage.getItem('jwt'));
            callApi("post", `/defineLevels/update/${id}`, data );
        }else{
            await defineLevelsDB.update({_id: id}, {...data})
        }
        
        await dispatch({
            type: UPDATE_DEFINE_LEVEL,
            payload: {
                id,
                data
            }
        });

    }catch(err){
        console.log(err)
    }
};
export const selectDefineLevel = (defineLevel) => async dispatch => {
    try{
        await dispatch({
            type: SELECT_DEFINE_LEVEL,
            payload: {
                ...defineLevel
            }
        })
    }catch(err){
        console.log(err)
    }
};