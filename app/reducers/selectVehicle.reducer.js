import {SELECT_VEHICLE} from "../constants/actions";

const initialState = {
    isSelected: false,
    vehicle:{
            brand: '',
            type: '',
            limit: '',
            number: '',
            fuel:'',
            date: '',
            sourse:'',
            chassis: '',
            engine: '',
            owned: '',
            status: '',
            startDate:'',
            productDate: '',
            level: '',
            uses:'',
            infor: '',
            base64: '',
            verify: {
                start: '',
                end: ''
            },
            equiments: {
                tires: [],
                batterys: []
            }

        }
};

const selectVehicle = (state=initialState, action)=>{
    switch(action.type){
        case SELECT_VEHICLE:
            return {
                isSelected: action.payload._id ? true : false,
                vehicle: {
                    ...action.payload
                    }
            }
        
        default:
            return state
    }
};

export default selectVehicle