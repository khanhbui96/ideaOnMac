import Datastore from 'nedb-promises';
import callApi from '../utils/callApi';
import {
        GET_MOTOBIKES,
        ADD_MOTOBIKE,
        DELETE_MOTOBIKE,
        SELECT_MOTOBIKE,
        UPDATE_MOTOBIKE
    } from '../constants/actions';
import setAuthHeader from '../utils/setAuthHeader';
import {getErrs} from './erros.actions';
import loading from './loading.action';
const motobikesDB = new Datastore({ filename: 'data/motobikes.json', autoload: true });

export const getAll = () => async dispatch => {
    try{
        let data
        await dispatch(loading());
        if(localStorage.getItem('jwt')){
            await setAuthHeader(localStorage.getItem('jwt'));
            const motoBike = await callApi('get', '/motoBikes/getAll', null);
            data = motoBike.data
        }else{
            data = await motobikesDB.find({});
        };
        await dispatch({
            type: GET_MOTOBIKES,
            payload: data
        })
    }catch(err){
        console.log(err)
    }
   
};
export const addMotoBike = (dt, func) => async dispatch => {
    try{
        let data
        func(false);
        await dispatch(loading());
        if(localStorage.getItem('jwt')){
            await setAuthHeader(localStorage.getItem('jwt'));
            const motoBike = await callApi('post', '/motoBikes/create', data);
            data = vehicle.data
        }else{
            data = await motobikesDB.insert({...dt});
        }
        await dispatch({
            type: ADD_MOTOBIKE,
            payload: data
        })

    }catch(err){
        func(true)
        dispatch(getErrs(err.response.data))
    }  
};
export const deleteMotoBike = (id) => async dispatch => {
    try{

        await dispatch(loading());
        if(localStorage.getItem('jwt')){
            await setAuthHeader(localStorage.getItem('jwt'));
            callApi("post", `/motoBikes/delete/${id}`, null );
        }else{
            await motobikesDB.remove({_id: id})
        };
        await dispatch({
            type: DELETE_MOTOBIKE,
            payload: id
        })

    }catch(err){
        console.log(err)
    }
};
export const updateMotoBike = (id, data) => async dispatch => {
    try{
        await setAuthHeader(localStorage.getItem('jwt'));
        callApi("post", `/motoBikes/update/${id}`, data );
        await dispatch({
            type: UPDATE_MOTOBIKE,
            payload: {
                id,
                data
            }
        });

        if(localStorage.getItem('jwt')){
            await setAuthHeader(localStorage.getItem('jwt'));
            callApi("post", `/motoBikes/update/${id}`, data );
        }else{
            await motobikesDB.update({_id: id}, {...data})
        }
        
        await dispatch({
            type: UPDATE_MOTOBIKE,
            payload: {
                id,
                data
            }
        });

    }catch(err){
        console.log(err)
    }
};
export const selectMotoBike = (MotoBike) => async dispatch => {
    try{
        await dispatch({
            type: SELECT_MOTOBIKE,
            payload: {
                ...MotoBike
            }
        })
    }catch(err){
        console.log(err)
    }
};