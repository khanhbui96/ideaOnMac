import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import HostWrapper from '../components/HostWrapper';
import OfflineWrapper from '../components/OfflineWrapper';
import Command from '../components/ApproveCommand/Command';
import {addCommand, getAllCommand, selectCommand, deleteCommand, updateCommand} from '../actions/command.actions';

const mapStateToProps = state=>{
  return {
    commands: state.commands,
    chooseCommand: state.selectCommand
  }
}
const ApproveCommandPage = (props)=>{
    return(
        <div>
        {localStorage.getItem('jwt') ?  
        <HostWrapper>
             <Command commandProps={props}/>
        </HostWrapper>:
        <OfflineWrapper>
             <Command commandProps={props}/>
        </OfflineWrapper>
        }
        </div>
    )
}
export default connect(
  mapStateToProps,
  {
    addCommand,
    getAllCommand,
    selectCommand,
    deleteCommand,
    updateCommand
  }
)(ApproveCommandPage);