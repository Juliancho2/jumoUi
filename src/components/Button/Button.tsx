import React from 'react';
import { ButtonProps } from './types';

import clsx from 'clsx';

const Button = ({
  children,
  variant = 'default',
  ...props
}:ButtonProps) => {
  const classNames = clsx('flex justify-center items-center rounded-sm font-semibold border-2 border-black px-[15px] py-[5px] w-[150px] text-xs h-[40px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none  hover:border-black  transition-all',
    variant === 'primary' && 'bg-[#C4E443]',
    variant === 'secondary' && 'bg-[#A482EE]',
    variant === 'neutral' && 'bg-[#1D232B] text-white  shadow-[#E2E2E2]'
  );
  return (
    <button className={classNames} {...props}>{children}</button>
  );
};

export default Button;
