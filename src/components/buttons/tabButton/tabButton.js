import React from 'react';
import cx from 'classnames';
import { body__bold } from '../../../styles/fonts.module.css';
import { button, button__active } from './tabButton.module.css';

const TabButton = ({
  isActive,
  additionalClasses = [],
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      className={cx(button, body__bold, ...additionalClasses, {
        [button__active]: isActive,
      })}
    >
      {children || ''}
    </button>
  );
};

export default TabButton;
