import {
    GET_MOTOBIKES,
    ADD_MOTOBIKE,
    DELETE_MOTOBIKE,
    UPDATE_MOTOBIKE,
    LOADING
} from "../constants/actions";

const initialState = {
    isUpdate: false,
    data: []
};

const motoBike = (state=initialState, action)=>{
    switch(action.type){
        case LOADING: {
            return {
                ...state,
                isUpdate: true
            }
        };
        case GET_MOTOBIKES:
            return {
                ...state,
                isUpdate: false,
                data: [
                    ...action.payload
                ]
            }
        case ADD_MOTOBIKE:
            return {
                isUpdate: false,
                data: [
                    ...state.data,
                    action.payload
                ]
            }
        case DELETE_MOTOBIKE:
            return {
                isUpdate: false,
                data: [
                    ...state.data.filter(vehicle=>{
                        return vehicle._id != action.payload
                    })
                ]
            }
        case UPDATE_MOTOBIKE:
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

export default motoBike