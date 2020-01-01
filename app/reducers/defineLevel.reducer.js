import {
    GET_DEFINE_LEVELS,
    ADD_DEFINE_LEVEL,
    DELETE_DEFINE_LEVEL,
    UPDATE_DEFINE_LEVEL,
    LOADING
} from "../constants/actions";

const initialState = {
    isUpdate: false,
    data: []
};

const defineLevel = (state=initialState, action)=>{
    switch(action.type){
        case LOADING: 
            return {
                ...state,
                isUpdate: true
            }
        case GET_DEFINE_LEVELS:
            return {
                ...state,
                isUpdate: false,
                data: [
                    ...action.payload
                ]
            }
        case ADD_DEFINE_LEVEL:
            return {
                isUpdate: false,
                data: [
                    ...state.data,
                    action.payload
                ]
            }
        case DELETE_DEFINE_LEVEL:
            return {
                isUpdate: false,
                data: [
                    ...state.data.filter(vehicle=>{
                        return vehicle._id != action.payload
                    })
                ]
            }
        case UPDATE_DEFINE_LEVEL:
                return {
                    isUpdate: false,
                    data: [
                        ...state.data.map(driver=>{
                            if(driver._id == action.payload.id){
                                return action.payload.data
                            }else{
                                return driver
                            }
                        }
                        )
                    ]
                }     
        default:
            return {
                isUpdate: false,
                data: [
                    ...state.data
                ]
            }
    }
};

export default defineLevel