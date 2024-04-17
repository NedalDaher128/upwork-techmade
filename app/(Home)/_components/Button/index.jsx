import ArrowYellow from '@/assets/Icons/ArrowYellow';
import React from 'react';
import './index.style.scss';

// Add a className prop to the Button component
const Button = ({ text, className ,onClick }) => (
  <div onClick={onClick} className={` ${className} button__container`}> {/* Use the className prop */}
    <button type="button">{text}</button>
    <ArrowYellow className="arrow-icon-button" />
  </div>
);

export default Button;
