import {SELECT_DEFINE_LEVEL} from "../constants/actions";

const initialState = {
    isSelected: false,
    data: {
        label: '',
        fluel: '',
        define1: '0',
        define2: '0',
        distance: 0,
        extra1:0,
        extra2:0,
        extra3:0,
        extra4:0
    }
};

const selectDefineLevel = (state=initialState, action)=>{
    switch(action.type){
        case SELECT_DEFINE_LEVEL:
            return {
                isSelected: action.payload._id ? true : false,
                data: {
                    ...state.data,
                    ...action.payload
                    }
            }
       
        default:
            return state
    }
};

export default selectDefineLevel