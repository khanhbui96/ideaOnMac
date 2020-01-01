import { SET_DISTANCE } from '../constants/actions';

export const setDistance = (object) => async dispatch=>{
    await dispatch({
        type: SET_DISTANCE,
        payload: object
    })
};

