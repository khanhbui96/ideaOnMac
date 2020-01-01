import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import HostWrapper from '../components/HostWrapper';
import OfflineWrapper from '../components/OfflineWrapper';
import Profile from '../components/Vehicle/Profile';
import {getAll, addVehicle, deleteVehicle, selectVehicle, updateVehicle} from '../actions/vehicle.actions'
import {getErrs} from '../actions/erros.actions';

const mapStateToProps = state=>{
  return {
    vehicles: state.vehicles,
    updateData: state.selectVehicles,
    errs: state.errs
  }
};

const VehicleProfilePage = (props)=>{
  const {getAll, vehicles} = props; 
  useEffect(()=>{
    getAll();
  },[])
    return(
      <div>
        {localStorage.getItem('jwt') ?  
        <HostWrapper>
            <Profile vehicleProps={props}/>
        </HostWrapper>:
        <OfflineWrapper>
          <Profile vehicleProps={props}/>
        </OfflineWrapper>
        }
      </div>
    )
}
export default connect(
  mapStateToProps,
  {
    getAll,
    addVehicle,
    deleteVehicle,
    selectVehicle,
    updateVehicle,
    getErrs
  }
)(VehicleProfilePage);