import Datastore from 'nedb-promises';
import callApi from '../utils/callApi';
import {
        GET_VEHICLES,
        ADD_VEHICLES,
        DELETE_VEHICLE,
        SELECT_VEHICLE,
        UPDATE_VEHICLE,
        GET_ERRS,
        LOADING
    } from '../constants/actions';
import setAuthHeader from '../utils/setAuthHeader';
import {getErrs} from './erros.actions';
import loading from './loading.action';
const vehiclesDB = new Datastore({ filename: 'data/vehicles.json', autoload: true });

export const getAll = () => async dispatch => {
    try{
        let data
        await dispatch(loading());
        if(localStorage.getItem('jwt')){
            await setAuthHeader(localStorage.getItem('jwt'));
            let vehicles = await callApi('get', '/vehicles/getAll', null);
            data = vehicles.data
        }else{
            data = await vehiclesDB.find({});
        };
        await dispatch({
            type: GET_VEHICLES,
            payload: data
        })
        
      
    }catch(err){
        console.log(err);
    }
   
};
export const addVehicle = (dt, func) => async dispatch => {
    try{
        let data
        func(0);
        await dispatch(loading());
        if(localStorage.getItem('jwt')){
            await setAuthHeader(localStorage.getItem('jwt'));
            let vehicle = await callApi('post', '/vehicles/create', data);
            data = vehicle.data
        }else{
            data = await vehiclesDB.insert({...dt});
        }
        await dispatch({
            type: ADD_VEHICLES,
            payload: data
        })
       
    }catch(err){
        func(1);
        await dispatch(getErrs(err.response.data))
    }  
};
export const deleteVehicle = (id) => async dispatch => {
    try{
        await dispatch(loading());
        if(localStorage.getItem('jwt')){
            await setAuthHeader(localStorage.getItem('jwt'));
            callApi("post", `/vehicles/delete/${id}`, null );
        }else{
            await vehiclesDB.remove({_id: id})
        };
        await dispatch({
            type: DELETE_VEHICLE,
            payload: id
        })
    }catch(err){
        console.log(err)
    }
};
export const updateVehicle = (id, data, func) => async dispatch => {
    try{
        func();
        if(localStorage.getItem('jwt')){
            await setAuthHeader(localStorage.getItem('jwt'));
            callApi("post", `/vehicles/update/${id}`, data );
        }else{
            await vehiclesDB.update({_id: id}, {...data})
        }
        
        await dispatch({
            type: UPDATE_VEHICLE,
            payload: {
                id,
                data
            }
        });
        
    }catch(err){
        console.log(err)
    }
};
export const selectVehicle = (vehicle) => async dispatch => {
    try{
        await dispatch({
            type: SELECT_VEHICLE,
            payload: {
                ...vehicle
            }
        })
    }catch(err){
        console.log(err)
    }
};
