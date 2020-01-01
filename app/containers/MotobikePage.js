import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import GuestWrapper from '../components/GuestWrapper';
import OfflineWrapper from '../components/OfflineWrapper';
import MotoBikeList from '../components/MotorBike/MotoBikeList';
import {
  getAll,
  addMotoBike,
  deleteMotoBike,
  updateMotoBike,
  selectMotoBike
} from '../actions/motoBike.actions';
import {getErrs} from '../actions/erros.actions';

const mapStateToProps = state=>{
  return {
    motoBikes: state.motoBike,
    updateData: state.selectMotoBike,
    errs: state.errs
  }
};

const MotoBikePage = (props)=>{
  const {getAll, motoBikes} = props;
  useEffect(()=>{
    getAll()
  }, [])
    return(
        <div>
        {localStorage.getItem('jwt') ?  
        <GuestWrapper>
            <MotoBikeList motoBikeProps={props} />
        </GuestWrapper>:
        <OfflineWrapper>
          <MotoBikeList motoBikeProps={props} />
        </OfflineWrapper>
        }
        </div>
    )
}
export default connect(
  mapStateToProps,
  {
    getAll,
    addMotoBike,
    deleteMotoBike,
    updateMotoBike,
    selectMotoBike,
    getErrs
  }
)(MotoBikePage);