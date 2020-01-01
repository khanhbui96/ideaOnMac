import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import Wrapper from '../components/HostWrapper';
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
        <Wrapper>
            <Command commandProps={props}/>
        </Wrapper>
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