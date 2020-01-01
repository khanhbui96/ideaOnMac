import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import HostWrapper from '../components/HostWrapper';
import OfflineWrapper from '../components/OfflineWrapper';
import Level from '../components/Driver/Level';

import {
  getAll
} from '../actions/driver.actions'

const mapStateToProps = state=>{
  return {
    drivers: state.drivers,
    updateData: state.selectDriver
  }
};

const DriverLevelPage = (props)=>{
  const {getAll, drivers} = props;
  useEffect(()=>{
    getAll()
  }, [])
    return(
      <div>
      {localStorage.getItem('jwt') ?  
      <HostWrapper>
          <Level vehicleProps={props}/>
      </HostWrapper>:
      <OfflineWrapper>
          <Level vehicleProps={props}/>
      </OfflineWrapper>
      }
    </div>
    )
}
export default connect(
  mapStateToProps,
  {
    getAll
  }
)(DriverLevelPage);