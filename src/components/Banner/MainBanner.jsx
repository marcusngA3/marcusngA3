import React from 'react';
import DogImage from '../../../public/images/dog.png';
import '../components.css';

export const MainBanner = () => {
  return (
    <div>
        <img src={DogImage} alt="main banner" className='bannerdog'/>
    </div>
  )
}
