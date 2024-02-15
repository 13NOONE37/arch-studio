import React from 'react';
import ArrowIcon from '../../assets/icons/icon-arrow.svg';
import cx from 'classnames';

import { button } from './button.module.css';
import { body__bold } from '../../styles/fonts.module.css';

const Button = ({ hasArrow, additionalClasses = [], children, ...props }) => {
  return (
    <button {...props} className={cx(button, body__bold, ...additionalClasses)}>
      {children ? <span>{children}</span> : ''}
      {hasArrow ? <ArrowIcon /> : ''}
    </button>
  );
};
export default Button;
