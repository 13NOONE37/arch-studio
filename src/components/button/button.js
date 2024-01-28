import React from 'react';
import ArrowIcon from '../../assets/icons/icon-arrow.svg';

const Button = ({ hasArrow, action, children, ...props }) => {
  return (
    <button onClick={action || (() => {})} {...props}>
      {children || ''}
      {hasArrow ? <ArrowIcon /> : ''}
    </button>
  );
};
export default Button;
