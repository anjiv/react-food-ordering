import React, { Component } from 'react'
import './style.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export default class MailLogin extends Component {
  constructor(){
    super();
    this.state={
      email:'',
      pass:''
    }
  }

  isEmailNull=(event)=>{
    this.setState({email:event.target.value});
  }

  isPassNull=(event)=>{
    this.setState({pass:event.target.value});
  }

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
            onChange={this.isEmailNull}
          />
        </div>
        <div className='password'>
          <TextField
            id="password"
            type="password"
            label="Password"
            margin="normal"
            style={{
              fontSize: 13,
              width: '100%'
            }}
            onChange={this.isPassNull}
          />
        </div>
        <div className='forgot-pass font-size-small'>Forgot Password ?</div>
        <Link to='/homepage' className='continue-btn-wrapper'>
          <Button variant="contained" color="secondary" 
          className={this.state.email&&this.state.pass ? 'button continue-active-btn'
          :'button continue-btn'}>
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
