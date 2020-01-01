import {
    LOADING
} from '../constants/actions';
const loading = ()=> dispatch=>{
    dispatch(
        {
            type: LOADING
        }
    )
} 
export default loading;