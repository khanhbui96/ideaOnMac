const {GET_ERRS} = require('../constants/actions')

export const getErrs = errs=>dispatch=>{
    dispatch(
        {
            type: GET_ERRS,
            payload: errs
        }
    )
}