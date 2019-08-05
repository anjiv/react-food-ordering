import React, { Component } from 'react'
import './style.css';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';

export default class Bookmark extends Component {
  render() {
    return (
    <div className='bookmark'>
      <div className='bookmark-title font-size-xl'>Bookmark</div>
      <Card className='list-item font-size-small'>
        <div className='hotel-info-container'>
          <div>
            <img src={require('../../images/image3.jpeg')} className='list-item-img' alt='image3'/>
          </div>
          <div className='list-item-info'>
            <div className='hotel-details'>
              <div className='hotel-title font-size-medium'>Chang's</div>
              <span className='hotel-rating font-size-small'>4.2</span>
              <img src={require('../../images/book-icon.svg')} 
              className='book-icon' alt='book-icon'/>
            </div>
            <div className='hotel-address font-size-small'>Viman nagar</div>
          </div>
        </div>
      </Card>
      <Card className='list-item font-size-small'>
        <div className='hotel-info-container'>
          <div>
            <img src={require('../../images/image6.jpeg')} className='list-item-img' alt='image6'/>
          </div>
          <div className='list-item-info'>
            <div className='hotel-details'>
              <div className='hotel-title font-size-medium'>Rollfie</div>
              <span className='hotel-rating font-size-small'>4.2</span>
              <img src={require('../../images/book-icon.svg')} 
              className='book-icon' alt='book-icon'/>
            </div>
            <div className='hotel-address font-size-small'>Viman nagar</div>
          </div>
        </div>
      </Card>
      <Card className='list-item font-size-small'>
        <div className='hotel-info-container'>
          <div>
            <img src={require('../../images/image7.jpeg')} className='list-item-img' alt='image7'/>
          </div>
          <div className='list-item-info'>
            <div className='hotel-details'>
              <div className='hotel-title font-size-medium'>Grandma cafe</div>
              <span className='hotel-rating font-size-small'>4.2</span>
              <img src={require('../../images/book-icon.svg')} 
              className='book-icon' alt='book-icon'/>
            </div>
            <div className='hotel-address font-size-small'>Viman nagar</div>
          </div>
        </div>
      </Card>
      <Card className='list-item font-size-small'>
        <div className='hotel-info-container'>
          <div>
            <img src={require('../../images/image5.jpeg')} className='list-item-img' alt='image5'/>
          </div>
          <div className='list-item-info'>
            <div className='hotel-details'>
              <div className='hotel-title font-size-medium'>Apsara</div>
              <span className='hotel-rating font-size-small'>4.2</span>
              <img src={require('../../images/book-icon.svg')} 
              className='book-icon' alt='book-icon'/>
            </div>
            <div className='hotel-address font-size-small'>Viman nagar</div>
          </div>
        </div>
      </Card>
      <div className='food-order-footer filter'>
        <Link to='/homepage'>
          <Button className='homepage-filter'>
            <img src={require('../../images/home-icon.svg')}
              className='home-filter-icon'
              alt='home-filter'
            />
            <div className='font-size-xs'>Home</div>
          </Button>
        </Link>
        <Link to='/search'>
          <Button className='search-filter'>
            <img src={require('../../images/search-icon.svg')}
              className='search-filter-icon'
              alt='search-filter'
            />
            <div className='font-size-xs'>Search</div>
          </Button>
        </Link>
        <Link to='/bookmark'>
          <Button className='bookmark-filter'>
            <img src={require('../../images/bookmark-icon-red.svg')}
              className='bookmark-filter-icon'
              alt='bookmark-filter'
            />
            <div className='font-size-xs'>Bookmark</div>
          </Button>
        </Link>
        <Link to='/profile'>
          <Button className='profile-filter'>
            <img src={require('../../images/profile-icon.svg')}
              className='profile-filter-icon'
              alt='profile-filter'
            />
            <div className='font-size-xs'>Profile</div>
          </Button>
        </Link>
      </div>
    </div>
    )
  }
}
