import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import HostWrapper from '../components/HostWrapper';
import OfflineWrapper from '../components/OfflineWrapper';
import Certificate from '../components/Driver/Certificate';
import {
  getAll
} from '../actions/driver.actions'

const mapStateToProps = state=>{
  return {
    drivers: state.drivers,
    updateData: state.selectDriver
  }
};

const DriveCertificatePage = (props)=>{
  const {getAll, drivers} = props;
  useEffect(()=>{
    getAll()
  }, [])
    return(
      <div>
      {localStorage.getItem('jwt') ?  
      <HostWrapper>
          <Certificate certificateProps={props}/>
      </HostWrapper>:
      <OfflineWrapper>
        <Certificate certificateProps={props}/>
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
)(DriveCertificatePage);