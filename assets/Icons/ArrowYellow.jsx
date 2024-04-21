import React from 'react';
import '@/styles/animation.scss'
const ArrowYellow = ({ className }) => (
  <svg
    width="34"
    height="38"
    viewBox="0 0 38 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className='arrow-warber'
    
    >
    <circle  cx="19" cy="19" r="19" fill="#BBE903" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M26.5685 12.0374C26.5685 11.8773 26.5048 11.7237 26.3916 11.6104C26.2784 11.4972 26.1248 11.4336 25.9646 11.4336H18.7189C18.5587 11.4336 18.4052 11.4972 18.2919 11.6104C18.1787 11.7237 18.1151 11.8773 18.1151 12.0374C18.1151 12.1975 18.1787 12.3511 18.2919 12.4644C18.4052 12.5776 18.5587 12.6412 18.7189 12.6412H24.507L12.2532 24.8938C12.1971 24.9499 12.1526 25.0166 12.1222 25.0899C12.0918 25.1633 12.0762 25.2419 12.0762 25.3213C12.0762 25.4007 12.0918 25.4793 12.1222 25.5527C12.1526 25.626 12.1971 25.6927 12.2532 25.7488C12.3094 25.8049 12.376 25.8495 12.4494 25.8799C12.5227 25.9102 12.6014 25.9259 12.6807 25.9259C12.7601 25.9259 12.8388 25.9102 12.9121 25.8799C12.9855 25.8495 13.0521 25.8049 13.1082 25.7488L25.3608 13.495V19.2832C25.3608 19.4433 25.4244 19.5969 25.5377 19.7101C25.6509 19.8234 25.8045 19.887 25.9646 19.887C26.1248 19.887 26.2784 19.8234 26.3916 19.7101C26.5048 19.5969 26.5685 19.4433 26.5685 19.2832V12.0374Z"
      stroke="#16161F"
      strokeWidth="1.28814"
      className="arrow-animation"
      style={{ animationDelay: '0.2s' }}
    />
  </svg>
);

export default ArrowYellow;
