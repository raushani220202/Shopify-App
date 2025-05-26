import React from 'react';
import './BredCrums.css';
import arrow_icon from '../../assets/arrow_icon.png';

const BredCrums = ({ product }) => {
  if (!product) return null;

  return (
    <div className='bredcrums'>
      Home <img src={arrow_icon} alt="arrow" height="10px" />
      SHOP <img src={arrow_icon} alt="arrow" height="10px" />
      {product.category} <img src={arrow_icon} alt="arrow" height="10px" />
      {product.name}
    </div>
  );
};

export default BredCrums;
