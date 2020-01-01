import {SET_OBJECT, SET_TYPE_FUEL, SET_PASS_ABILITY, SET_AMOUNT_PEOPLE, SET_VOLUME} from '../constants/actions';

const initialState = {
    update: false,
    infors:{
        object: "Vật chất",
        fuel: "Dầu Diezen",
        ability: "Thấp",
        volume: "Chưa nhập số lượng",
        amount: "Chưa nhập số lượng"
    }
};

const choose = (state = initialState, action)=>{
    switch(action.type){
        case SET_OBJECT:
            return {
                ...state,
                update: true,
                infors: {
                    ...state.infors,
                    object: action.payload
                }
            }
        case SET_TYPE_FUEL:
            return {
                ...state,
                update: true,
                infors: {
                    ...state.infors,
                    fuel: action.payload
                }
            }
        case SET_PASS_ABILITY:
            return {
                ...state,
                update: true,
                infors: {
                    ...state.infors,
                    ability: action.payload
                }
            }
        case SET_AMOUNT_PEOPLE:
            return {
                ...state,
                update: true,
                infors: {
                    ...state.infors,
                    amount: action.payload
                }
            }
        case SET_VOLUME:
            return {
                ...state,
                update: true,
                infors: {
                    ...state.infors,
                    volume: action.payload
                }
            }
        default:
            return state
    }
};
export default choose