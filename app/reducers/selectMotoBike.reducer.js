import {SELECT_MOTOBIKE} from "../constants/actions";

const initialState = {
    isSelected: false,
    data: {
        name: '',
        unit: '',
        address: '',
        type: '',
        model: '' ,
        color: '',
        license:'',
        duration:''
    }
};

const selectMotoBike = (state=initialState, action)=>{
    switch(action.type){
        case SELECT_MOTOBIKE:
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

export default selectMotoBike