import React from 'react';
import Button from '../button';

const ArrowButton = ({ size = '80px', additionalClasses, ...props }) => {
  return (
    <Button
      hasArrow
      additionalClasses={additionalClasses}
      style={{ padding: 0, width: size, height: size }}
      {...props}
    />
  );
};
export default ArrowButton;
