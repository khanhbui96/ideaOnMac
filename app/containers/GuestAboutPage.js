import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import Wrapper from '../components/GuestWrapper';
import About from '../components/GuestAbout';
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
            <About/>
        </Wrapper>
    )
}
export default connect(
  mapStateToProps,
  {
    getCurrentUser
  }
)(GuestAboutPage);