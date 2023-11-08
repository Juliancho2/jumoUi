import React from 'react';
import { Button as AntButton } from 'antd';
import { ButtonProps } from './types';

const Button = ({ children }:ButtonProps) => {
  return (
    <AntButton>{children}</AntButton>
  );
};

export default Button;
