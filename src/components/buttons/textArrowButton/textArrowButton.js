import React from 'react';
import Button from '../button';

const TextArrowButton = ({ children, additionalClasses, ...props }) => {
  return (
    <Button
      hasArrow
      additionalClasses={additionalClasses}
      {...props}
      children={children}
    />
  );
};
export default TextArrowButton;
