import { SET_OBJECT, SET_TYPE_FUEL, SET_PASS_ABILITY, SET_VOLUME, SET_AMOUNT_PEOPLE } from '../constants/actions';

export const setObject = (object) => async dispatch=>{
    await dispatch({
        type: SET_OBJECT,
        payload: object
    })
};

export const setTypeFuel = (object) => async dispatch=>{
    await dispatch({
        type: SET_TYPE_FUEL,
        payload: object
    })
};
export const setPassAbility = (object) => async dispatch=>{
    await dispatch({
        type: SET_PASS_ABILITY,
        payload: object
    })
};
export const setVolume = (object) => async dispatch=>{
    await dispatch({
        type: SET_VOLUME,
        payload: object
    })
};
export const setAmountPeople = (object) => async dispatch=>{
    await dispatch({
        type: SET_AMOUNT_PEOPLE,
        payload: object
    })
};