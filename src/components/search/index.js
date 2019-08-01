import React, { Component } from 'react'
import './style.css';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';

export default class Search extends Component {
  render() {
    return (
    <div className='search'>
      <div className='search-title font-size-xl'>Search</div>

        <div className='search-field-wrapper'>
          <img src={require('../../images/search-icon.svg')} alt='search-icon'/>
          <input type='text' placeholder='Search for restaurants, cuisines...' className='search-text'/>
        </div>

        <div className='recent-search-container'>
          <div className='container-title font-size-small'>Recent search</div>
          <div className='recent-search-result font-size-large'>
            <div>Naturals</div>
            <div>Dominos</div>
            <div>Keventers</div>
          </div>
        </div>

        <div className='categories-container'>
          <div className='categories-container-title font-size-small'>Trending</div>
          <div className='result-container'>
            <Card className='search-list'>
              <div className='trending-items font-size-medium'>
                <img src={require('../../images/top-icon.svg')} 
                className='top-icon' alt='top-icon'/>
                <div>Playboy</div>
              </div>
            </Card>
            <Card className='search-list'>
              <div className='trending-items font-size-medium'>
                <img src={require('../../images/top-icon.svg')} 
                className='top-icon' alt='top-icon'/>
                <div>Dominos</div>
              </div>
            </Card>
            <Card className='search-list'>
              <div className='trending-items font-size-medium'>
                <img src={require('../../images/top-icon.svg')} 
                className='top-icon' alt='top-icon'/>
                <div>Doolally</div>
              </div>
            </Card>
            <Card className='search-list'>
              <div className='trending-items font-size-medium'>
                <img src={require('../../images/top-icon.svg')} 
                className='top-icon' alt='top-icon'/>
                <div>Effingut</div>
              </div>
            </Card>
            <Card className='search-list'>
              <div className='trending-items font-size-medium'>
                <img src={require('../../images/top-icon.svg')} 
                className='top-icon' alt='top-icon'/>
                <div>Backstage</div>
              </div>
            </Card>
          </div>
        </div>

        <div className='categories-container'>
          <div className='categories-container-title font-size-small'>Quick search</div>
          <div className='result-container'>
            <Card className='search-list'>
              <div className='trending-items font-size-medium'>
                <img src={require('../../images/food-icon.png')} 
                className='food-icon' alt='food-icon'/>
                <div>Lunch</div>
              </div>
            </Card>
            <Card className='search-list'>
              <div className='trending-items font-size-medium'>
                <img src={require('../../images/food-icon.png')} 
                className='food-icon' alt='food-icon'/>
                <div>Delivery</div>
              </div>
            </Card>
            <Card className='search-list'>
              <div className='trending-items font-size-medium'>
                <img src={require('../../images/food-icon.png')} 
                className='food-icon' alt='food-icon'/>
                <div>Dinner</div>
              </div>
            </Card>
            <Card className='search-list'>
              <div className='trending-items font-size-medium'>
                <img src={require('../../images/food-icon.png')} 
                className='food-icon' alt='food-icon'/>
                <div>Breakfast</div>
              </div>
            </Card>
            <Card className='search-list'>
              <div className='trending-items font-size-medium'>
                <img src={require('../../images/food-icon.png')} 
                className='food-icon' alt='food-icon'/>
                <div>Chinese</div>
              </div>
            </Card>
          </div>
        </div>
      <div className='popular-btn-wrapper'>
        <Link to='/homepage' className='homepage-places'>
          <Button variant="contained" color="secondary" className='button places-btn'>
            <span className='font-size-medium'>See all popular places</span>
          </Button>
        </Link>
      </div>
    </div>
    )
  }
}
