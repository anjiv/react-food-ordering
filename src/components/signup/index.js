import React, { Component } from 'react'
import './style.css';
import './../../global/global.css';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export default class SignUp extends Component {
  render() {
    return (
      <div className='signup-wrapper'>
        <div className='food-title'>Food Express</div>
        <div className='signup-overlay'>
          <Link to='/signup/mail-login'>
            <Button variant="contained" color="secondary" className='signup-btn-google button'>
              <img src={require('../../images/google-icon.png')} 
              className='google-icon' 
              alt='google-icon'/>
              <span className='font-size-large'>Continue with Google</span>
            </Button>
          </Link>
          <Link to='/signup/mail-login' className='mail-anchor'>
            <Button variant="contained" color="secondary" className='signup-btn-mail button'>
              <img src={require('../../images/mail-icon.png')} 
              className='mail-icon' 
              alt='mail-icon'/>
              <span className='font-size-large'>Continue with Email</span>
            </Button>
          </Link>
        </div>
      </div>
    )
  }
}
