import {
    GET_DRIVERS, 
    ADD_DRIVER, 
    DELETE_DRIVER, 
    UPDATE_DRIVER,
    LOADING
} from "../constants/actions";

const initialState = {
    isUpdate: false,
    data: []
};

const drivers = (state=initialState, action)=>{
    switch(action.type){
        case LOADING: {
            return {
                ...state,
                isUpdate: true
            }
        };
        case GET_DRIVERS:
            return {
                ...state,
                isUpdate: false,
                data: [
                    ...action.payload
                ]
            }
        case ADD_DRIVER:
            return {
                isUpdate: false,
                data: [
                    ...state.data,
                    action.payload
                ]
            }
        case DELETE_DRIVER:
            return {
                isUpdate: false,
                data: [
                    ...state.data.filter(driver=>{
                        return driver._id != action.payload
                    })
                ]
            }
        case UPDATE_DRIVER:
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

export default drivers