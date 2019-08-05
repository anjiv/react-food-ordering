import React, { Component } from 'react'
import './style.css';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';

export default class Profile extends Component {
  render() {
    return (
    <div className='profile-wrapper'>
      <div className='profile-title font-size-xl'>Food Express</div>
      <div className='profile-info'>
        <div className='avatar'>
          <img src={require('../../images/profile.jpeg')} alt='profile'/>
        </div>
        <div className='person-info'>
          <div className='font-size-xl name'>Ms. Josephine</div>
          <div className='font-size-large place'>Jaipur</div>
        </div>
      </div>
      <div className='profile-division'>
        <Link to='/bookmark'>
          <Card className='division-wrapper'>
            <div className='division-title'>
            Bookmarks
            </div>
            <i className="material-icons">
            chevron_right
            </i>
          </Card>
        </Link>
      </div>
      <div className='profile-division'>
        <Card className='division-wrapper'>
          <div className='division-title'>
          Order History
          </div>
          <i className="material-icons">
          chevron_right
          </i>
        </Card>
      </div>
      <div className='profile-division'>
        <Card className='division-wrapper'>
          <div className='division-title'>
          Favorite Orders
          </div>
          <i className="material-icons">
          chevron_right
          </i>
        </Card>
      </div>
      <div className='profile-division'>
        <Card className='division-wrapper'>
          <div className='division-title'>
          Manage payment options
          </div>
          <i className="material-icons">
          chevron_right
          </i>
        </Card>
      </div>
      <div className='profile-division division-end'>
        <Card className='division-wrapper'>
          <div className='division-title'>
          Account settings
          </div>
          <i className="material-icons">
          chevron_right
          </i>
        </Card>
      </div>
      <Link to='/' className='signout-wrapper'>
        <Button variant="contained" color="secondary" className='button signout-btn'>
          <img src={require('../../images/signout.svg')} alt='signout'/>
          <span className='font-size-medium'>SignOut</span>
        </Button>
      </Link>
    </div>
    )
  }
}
