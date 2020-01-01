import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import HostWrapper from '../components/HostWrapper';
import OfflineWrapper from '../components/OfflineWrapper';
import Profile from '../components/Driver/Profile';
import {getErrs} from '../actions/erros.actions';
import {
  getAll,
  addDriver,
  deleteDriver,
  selectDriver,
  updateDriver
} from '../actions/driver.actions'

const mapStateToProps = state=>{
  return {
    drivers: state.drivers,
    updateData: state.selectDriver,
    errs: state.errs
  }
};

const DriveProfilePage = (props)=>{
  const {getAll, drivers} = props;
  useEffect(()=>{
    getAll()
  }, [])
    return(
      <div>
      {localStorage.getItem('jwt') ?  
      <HostWrapper>
          <Profile driverProps={props}/>
      </HostWrapper>:
      <OfflineWrapper>
          <Profile driverProps={props}/>
      </OfflineWrapper>
      }
    </div>
    )
}
export default connect(
  mapStateToProps,
  {
    getAll,
    addDriver,
    deleteDriver,
    selectDriver,
    updateDriver,
    getErrs
  }
)(DriveProfilePage);