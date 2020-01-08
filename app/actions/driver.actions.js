import Datastore from 'nedb-promises';
import callApi from '../utils/callApi';

import {
        GET_DRIVERS,
        ADD_DRIVER,
        DELETE_DRIVER,
        SELECT_DRIVER,
        UPDATE_DRIVER,
        LOADING
    } from '../constants/actions';
import setAuthHeader from '../utils/setAuthHeader';
import {getErrs} from './erros.actions';
import loading from './loading.action';

const driversDB = new Datastore({ filename: 'data/drivers.json', autoload: true });
export const getAll = () => async dispatch => {
    try{
        let data;
        await dispatch(loading());
        if(localStorage.getItem('jwt')){
            await setAuthHeader(localStorage.getItem('jwt'));
            const drivers = await callApi('get', '/drivers/getAll', null);
            data = drivers.data;
        }else{
            data = await driversDB.find({});
        };
        
        await dispatch({
            type: GET_DRIVERS,
            payload: data
        })
    }catch(err){
        console.log(err)
    }
   
};
export const addDriver = (dt, func) => async dispatch => {
    try{
        let data;
        func(0);
        await dispatch(loading());
        if(localStorage.getItem('jwt')){
            await setAuthHeader(localStorage.getItem('jwt'));
            const driver = await callApi('post', '/drivers/create', dt);
            data = driver.data
        }else{
            data = await driversDB.insert({...dt});
        }
        await dispatch({
            type: ADD_DRIVER,
            payload: data
        })

        
    }catch(err){
        func(1);
        await dispatch(getErrs(err.response.data))
    }  
};
export const deleteDriver = (id) => async dispatch => {
    try{

        await dispatch(loading());
        if(localStorage.getItem('jwt')){
            await setAuthHeader(localStorage.getItem('jwt'));
            callApi("post", `/drivers/delete/${id}`, null );
        }else{
            await driversDB.remove({_id: id})
        };
        await dispatch({
            type: DELETE_DRIVER,
            payload: id
        })

    }catch(err){
        console.log(err)
    }
};
export const updateDriver = (id, data, func) => async dispatch => {
    try{

        func();
        if(localStorage.getItem('jwt')){
            await setAuthHeader(localStorage.getItem('jwt'));
            callApi("post", `/drivers/update/${id}`, data );
        }else{
            await driversDB.update({_id: id}, {...data})
        }
        
        await dispatch({
            type: UPDATE_DRIVER,
            payload: {
                id,
                data
            }
        });


    }catch(err){
        console.log(err)
    }
};
export const selectDriver = (driver) => async dispatch => {
    try{
        await dispatch({
            type: SELECT_DRIVER,
            payload: {
                ...driver
            }
        })
    }catch(err){
        console.log(err)
    }
};