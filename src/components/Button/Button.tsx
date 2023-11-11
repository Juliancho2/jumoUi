import React from 'react';
import { ButtonProps } from './types';

import clsx from 'clsx';
import { ButtonSize, ButtonVariant } from './constants/enumsButton';

const Sizes: Record<string, string> = {
  [ButtonSize.xs]: 'py-1 px-2 text-xs font-semibold h-6',
  [ButtonSize.sm]: 'py-1.5 px-3 text-sm font-semibold h-8',
  [ButtonSize.base]: 'py-2 px-4 text-sm font-semibold h-10',
  [ButtonSize.lg]: 'py-3 px-5 text-base font-semibold h-12'
};

const Variants:Record<string, string> = {
  primary: 'bg-[#C4E443]',
  secondary: 'bg-[#A482EE]',
  neutral: 'bg-[#1D232B] text-white  shadow-[#E2E2E2]'
};

const Button = ({
  children,
  variant = ButtonVariant.default,
  size = ButtonSize.base,
  ...props
}:ButtonProps) => {
  const classNames = clsx(variant === 'custom' ? '' : 'flex justify-center items-center rounded-sm border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none hover:border-black  transition-all', Sizes[size], Variants[variant]

  );
  return (
    <button className={classNames} {...props}>{children}</button>
  );
};

export default Button;
