import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import GuestWrapper from '../components/GuestWrapper';
import OfflineWrapper from '../components/OfflineWrapper';
import Calculation from '../components/Calculation/Calculation';
import {getAll, selectDefineLevel} from '../actions/defineLevel.actions';

const mapStateToProps = state=>{
  return {
    defineLevels: state.defineLevel,
    updateData: state.selectDefineLevel
  }
}
const CalculationPage = (props)=>{
  const {getAll, defineLevels} = props;
  useEffect(()=>{
    getAll()
  }, [defineLevels.isUpdate])
    return(
        <div>
        {localStorage.getItem('jwt') ?  
        <GuestWrapper>
            <Calculation defineLevelProps={props}/>
        </GuestWrapper>:
        <OfflineWrapper>
          <Calculation defineLevelProps={props}/>
        </OfflineWrapper>
        }
        </div>
    )
}
export default connect(
  mapStateToProps,
  {
    getAll,
    selectDefineLevel
  }
)(CalculationPage);