import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import Wrapper from '../components/HostWrapper';
import HostAbout from "../components/HostAbout"
import {getCurrentUser} from '../actions/user.actions'

const mapStateToProps = state=>{
  return {
    
  }
};

const GuestAboutPage = (props)=>{
  const {getCurrentUser} = props
  useEffect(()=>{
    
  }, [])
    return(
        <Wrapper>
            <HostAbout/>
        </Wrapper>
    )
}
export default connect(
  mapStateToProps,
  {
    getCurrentUser
  }
)(GuestAboutPage);