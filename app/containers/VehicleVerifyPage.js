import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import HostWrapper from '../components/HostWrapper';
import OfflineWrapper from '../components/OfflineWrapper';
import Verify from '../components/Vehicle/Verify';
import {getAll, selectVehicle, updateVehicle} from '../actions/vehicle.actions';
import {getAllCommand} from '../actions/command.actions';
const mapStateToProps = state=>{
  return {
    vehicles: state.vehicles,
    updateData: state.selectVehicles,
    commands: state.commands
  }
};

const VehicleVerifyPage = (props)=>{
  const {getAll, vehicles} = props;
  useEffect(()=>{
    getAll();
  },[]);
    return(
      <div>
      {localStorage.getItem('jwt') ?  
      <HostWrapper>
          <Verify vehicleProps={props}/>
      </HostWrapper>:
      <OfflineWrapper>
        <Verify vehicleProps={props}/>
      </OfflineWrapper>
      }
    </div>
    )
}
export default connect(
  mapStateToProps,
  {
    getAll,
    getAllCommand,
    selectVehicle,
    updateVehicle
  }
)(VehicleVerifyPage);