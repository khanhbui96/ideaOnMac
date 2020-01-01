import {GET_VEHICLES, ADD_VEHICLES, DELETE_VEHICLE, UPDATE_VEHICLE, LOADING} from "../constants/actions";

const initialState = {
    isUpdate: false,
    data: []
};

const vehicles = (state=initialState, action)=>{
    switch(action.type){
        case GET_VEHICLES:
            return {
                ...state,
                isUpdate: false,
                data: [
                    ...action.payload
                ]
            }
        case LOADING: {
            return {
                ...state,
                isUpdate: true
            }
        };
        case ADD_VEHICLES:
            return {
                isUpdate: false,
                data: [
                    ...state.data,
                    action.payload
                ]
            };
        case DELETE_VEHICLE:
            return {
                isUpdate: false,
                data: [
                    ...state.data.filter(vehicle=>{
                        return vehicle._id != action.payload
                    })
                ]
            }
        case UPDATE_VEHICLE:
             return {
                 isUpdate: false,
                 data: [
                     ...state.data.map(vehicle=>{
                         if(vehicle._id == action.payload.id){
                             return action.payload.data
                         }else{
                             return vehicle
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

export default vehicles