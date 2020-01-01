// @flow
import { connect } from 'react-redux';
import Login from '../components/Login';
import {loginUser} from '../actions/user.actions';
import {getErrs} from '../actions/erros.actions'

const mapStateToProps = state=>{
  return {
    errs: state.errs,
    user: state.user
  }
}
export default connect(
  mapStateToProps,
  {
    loginUser,
    getErrs
  }
)(Login);