import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import HostWrapper from '../components/HostWrapper';
import OfflineWrapper from '../components/OfflineWrapper';
import Equiment from '../components/Vehicle/Equiment';
import {getAll, selectVehicle, updateVehicle} from '../actions/vehicle.actions';
const mapStateToProps = state=>{
  return {
    vehicles: state.vehicles,
    updateData: state.selectVehicles
  }
};

const VihecleEquimentPage = (props)=>{
  const {getAll, vehicles} = props;
  useEffect(()=>{
    getAll()
  }, [])
    return(
      <div>
        {localStorage.getItem('jwt') ?  
        <HostWrapper>
            <Equiment vehicleProps={props}/>
        </HostWrapper>:
        <OfflineWrapper>
          <Equiment vehicleProps={props}/>
        </OfflineWrapper>
        }
      </div>
    )
}
export default connect(
  mapStateToProps,
  {
    getAll,
    selectVehicle,
    updateVehicle
  }
)(VihecleEquimentPage);