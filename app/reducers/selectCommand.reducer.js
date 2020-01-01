import {SELECT_COMMAND} from "../constants/actions";

const initialState = {
    isSelected: false,
    command: {
        status: false,
        amount: '',
        to: '',
        to2: '',
        from: '',
        from2: '',
        base: '',
        use: '',
        brand: '',
        unit: '',
        license: '',
        doing: '',
        user1: '',
        distance: '',
        distance2: '',
        times: '',
        co: '',
        user2: '',
        times2:'',
        amount2: '',
        place: '',
        fuel: '',
        pay:'',
        result: ''
    }
};

const selectCommand = (state=initialState, action)=>{
    switch(action.type){
        case SELECT_COMMAND:
            return {
                isSelected: action.payload._id ? true : false,
                command: {
                    ...action.payload
                    }
            }
        
        default:
            return state
    }
};

export default selectCommand