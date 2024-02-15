import React from 'react';
import cx from 'classnames';
import { body__bold } from '../../../styles/fonts.module.css';
import { button, button__active } from './tabButton.module.css';

const TabButton = ({ isActive, additionalClasses, children, ...props }) => {
  return (
    <button
      {...props}
      additionalClasses={additionalClasses}
      className={cx(button, body__bold, { [button__active]: isActive })}
    >
      {children || ''}
    </button>
  );
};

export default TabButton;
