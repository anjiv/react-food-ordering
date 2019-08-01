import React, { Component } from 'react'
import './style.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export default class MailLogin extends Component {
  render() {
    return (
    <div className='login-wrapper'>
      <div className='login'>
        <img src={require('../../images/delivery.svg')} alt='delivery'/>
        <div className='login-title'>Login</div>
        <div className='email-address'>
          <TextField
            id="email-id"
            label="Email or Username"
            margin="normal"
            style={{
              fontSize: 13,
              width: '100%'
            }}
          />
        </div>
        <div className='password'>
          <TextField
            id="password"
            label="Password"
            margin="normal"
            style={{
              fontSize: 13,
              width: '100%'
            }}
          />
        </div>
        <span className='forgot-pass'>Forgot Password ?</span>
        <Link to='/homepage' className='continue-btn-wrapper'>
          <Button variant="contained" color="secondary" className='button continue-btn'>
            <span className='font-size-medium'>Continue</span>
          </Button>
        </Link>
        <Link to='/signup' className='signup-btn-wrapper'>
          <Button variant="contained" color="secondary" className='button signup-btn'>
            <span className='font-size-medium'>New to Food express? Sign up</span>
          </Button>
        </Link>
      </div>
      <div className='login-footer'>
        <div className='terms'>
          <span>By logging in, you agree to our </span>
          <Link to='/signup' className='font-size-small'>Terms and Conditions.</Link>
        </div>
      </div>
    </div>
    )
  }
}