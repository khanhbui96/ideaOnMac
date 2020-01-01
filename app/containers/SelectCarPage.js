import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import Wrapper from '../components/GuestWrapper';
import SelectCar from '../components/SelectCar/SelectCar';
import {getCurrentUser} from '../actions/user.actions';
import { setTypeFuel, setAmountPeople, setObject, setPassAbility, setVolume} from '../actions/choose.actions'
import {getAll} from '../actions/vehicle.actions'
const mapStateToProps = state=>{
  return {
    choose: state.choose,
    vehicles: state.vehicles
  }
}
const SelectCarPage = (props)=>{
  useEffect(()=>{
    props.getAll()
  }, [])
    return(
        <Wrapper>
            <SelectCar selectCarProps = {props}/>
        </Wrapper>
    )
}
export default connect(
  mapStateToProps,
  {
    getCurrentUser,
    setAmountPeople,
    setObject,
    setPassAbility,
    setVolume,
    setTypeFuel,
    getAll
  }
)(SelectCarPage);