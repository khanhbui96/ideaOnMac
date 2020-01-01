import {SELECT_DRIVER} from "../constants/actions";

const initialState = {
    isSelected: false,
    driver: {
        name: "",
        birthday: "",
        number: "",
        start: "",
        level: "",
        end: "",
        salary: "",
        salaryReceive: '',
        academic: '',
        rank: "",
        position:"",
        unit: "",
        registArea: "",
        degree: "",
        dateReceive: "",
        uses: ""
    }
};

const selectDriver = (state=initialState, action)=>{
    switch(action.type){
        case SELECT_DRIVER:
            return {
                isSelected: action.payload._id ? true : false,
                driver: {
                    ...action.payload
                    }
            }
        
        default:
            return state
    }
};

export default selectDriver