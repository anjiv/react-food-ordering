import React, { Component } from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import './style.css';
import Card from '@material-ui/core/Card';

export default class Homepage extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          url: require('../../images/image2.jpeg')
        },
        {
          url: require('../../images/image3.jpeg')
        },
        {
          url: require('../../images/image4.jpeg')
        },
        {
          url: require('../../images/image5.jpeg')
        },
        {
          url: require('../../images/image6.jpeg')
        },
        {
          url: require('../../images/image7.jpeg')
        },
      ],
      children: [
        {
          url: require('../../images/image9.jpeg')
        },
        {
          url: require('../../images/image8.jpeg')
        },
        {
          url: require('../../images/image10.jpeg')
        },
        {
          url: require('../../images/image5.jpeg')
        },
        {
          url: require('../../images/image6.jpeg')
        },
        {
          url: require('../../images/image7.jpeg')
        },
      ]
    }
  }

  render() {
    const {
      activeItemIndex,
      children,
    } = this.state;
    return (
      <div className='homepage-wrapper'>
        <div className='location'>
          <span className='font-size-xs'><img src={require('../../images/location-icon.svg')} alt='location-icon'/>your location</span>
          <span className='font-size-medium'>Home</span>
          <span className='font-size-xs'>xxx apartments, Jaipur, Rajasthan</span>
        </div>
        <div className='slider'>
          <SimpleImageSlider
            width={375}
            height={180}
            images={this.state.data}
            showBullets={false}
            style={{ width: '100%' }}
            showNavs={true}
          />
        </div>

        <div className='search-wrapper'>
          <img src={require('../../images/search-icon.svg')} alt='search-icon'/>
          <input type='text' placeholder='Search for restaurants, dishes...' className='search-text font-size-large'/>
        </div>

        <Card className='list-item font-size-small'>
          <div className='hotel-info-container'>
            <div>
              <img src={require('../../images/image3.jpeg')} className='list-item-img' alt='image3'/>
            </div>
            <div className='list-item-info'>
              <div className='hotel-details'>
                <div className='hotel-title font-size-xl'>Chang's</div>
                <span className='hotel-rating font-size-medium'>4.2</span>
              </div>
              <div className='hotel-cuisines font-size-small'>Chinese</div>
              <div className='hotel-average-cost font-size-small'>₹400 per person</div>
              <div className='hotel-order-details font-size-small'>30 mins
              <span className='bullet'> · </span>₹200 min order</div>
            </div>
          </div>
          <div className='hotel-discount-container'>
            <div className='hotel-discount-info'>
              <img src={require('../../images/discount-icon.png')} alt='discount-icon'/>
              <span>15% OFF - auto applies at checkout</span>
            </div>
          </div>
        </Card>

        <Card className='list-item'>
          <div className='hotel-info-container'>
            <div>
              <img src={require('../../images/image7.jpeg')} className='list-item-img' alt='image7'/>
            </div>
            <div className='list-item-info'>
              <div className='hotel-details'>
                <div className='hotel-title font-size-xl'>Brown Baker</div>
                <span className='hotel-rating font-size-medium'>4.0</span>
              </div>
              <div className='hotel-cuisines font-size-small'>Bakery</div>
              <div className='hotel-average-cost font-size-small'>₹150 per person</div>
              <div className='hotel-order-details font-size-small'>20 mins
              <span className='bullet'> · </span>₹100 min order</div>
            </div>
          </div>
          <div className='hotel-discount-container'>
            <div className='hotel-discount-info'>
              <img src={require('../../images/discount-icon.png')} alt='discount-icon'/>
              <span>20% OFF - auto applies at checkout</span>
            </div>
          </div>
        </Card>

        <div className='popular-slider'>
        <img src={require('../../images/crown.svg')} alt='crown'/>
        <div className='slider-title font-size-xl'>Popular cuisines around you</div>
        </div>
        <div className='slider-second'>
          <div className='slider-overlay'>
            <div>Up to 50% off</div>
          </div>
          <SimpleImageSlider
            width={375}
            height={180}
            images={this.state.children}
            showBullets={false}
            style={{ width: '100%' }}
            showNavs={true}
          />
        </div>

        <Card className='list-item'>
          <div className='hotel-info-container'>
            <div>
              <img src={require('../../images/image6.jpeg')} className='list-item-img' alt='image6'/>
            </div>
            <div className='list-item-info'>
              <div className='hotel-details'>
                <div className='hotel-title font-size-xl'>Faasos</div>
                <span className='hotel-rating font-size-medium'>4.3</span>
              </div>
              <div className='hotel-cuisines font-size-small'>North Indian</div>
              <div className='hotel-average-cost font-size-small'>₹150 per person</div>
              <div className='hotel-order-details font-size-small'>40 mins
              <span className='bullet'> · </span>₹150 min order</div>
            </div>
          </div>
        </Card>

        <Card className='list-item'>
          <div className='hotel-info-container'>
            <div>
              <img src={require('../../images/image4.jpeg')} className='list-item-img' alt='image4'/>
            </div>
            <div className='list-item-info'>
              <div className='hotel-details'>
                <div className='hotel-title font-size-xl'>Subway</div>
                <span className='hotel-rating font-size-medium'>3.5</span>
              </div>
              <div className='hotel-cuisines font-size-small'>Fast Food</div>
              <div className='hotel-average-cost font-size-small'>₹250 per person</div>
              <div className='hotel-order-details font-size-small'>30 mins
              <span className='bullet'> · </span>₹150 min order</div>
            </div>
          </div>
        </Card>

        <Card className='list-item'>
          <div className='hotel-info-container'>
            <div>
              <img src={require('../../images/image5.jpeg')} className='list-item-img' alt='image5'/>
            </div>
            <div className='list-item-info'>
              <div className='hotel-details'>
                <div className='hotel-title font-size-xl'>Naturals</div>
                <span className='hotel-rating font-size-medium'>4.2</span>
              </div>
              <div className='hotel-cuisines font-size-small'>Icecream</div>
              <div className='hotel-average-cost font-size-small'>₹150 per person</div>
              <div className='hotel-order-details font-size-small'>35 mins
              <span className='bullet'> · </span>₹100 min order</div>
            </div>
          </div>
          <div className='hotel-discount-container'>
            <div className='hotel-discount-info'>
              <img src={require('../../images/discount-icon.png')} alt='discount-icon'/>
              <span>10% OFF - auto applies at checkout</span>
            </div>
          </div>
        </Card>

        <Card className='list-item'>
          <div className='hotel-info-container'>
            <div>
              <img src={require('../../images/image2.jpeg')} className='list-item-img' alt='image2'/>
            </div>
            <div className='list-item-info'>
              <div className='hotel-details'>
                <div className='hotel-title font-size-xl'>Dominos</div>
                <span className='hotel-rating font-size-medium'>4.0</span>
              </div>
              <div className='hotel-cuisines font-size-small'>Pizza, Fast Food</div>
              <div className='hotel-average-cost font-size-small'>₹150 per person</div>
              <div className='hotel-order-details font-size-small'>30 mins
              <span className='bullet'> · </span>₹50 min order</div>
            </div>
          </div>
        </Card>

        <div className='food-order-footer filter'>
          <Link to='/signup'>
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
              <img src={require('../../images/bookmark-icon.svg')}
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
