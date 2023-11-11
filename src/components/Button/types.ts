import React, { ReactNode } from 'react';
import { ButtonSize, ButtonVariant } from './constants/enumsButton';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    children: ReactNode,
    variant?: ButtonVariant | string,
    size?:ButtonSize | string
}
