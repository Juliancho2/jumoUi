// import { Button as AntButton } from 'antd';
import React, { ReactNode } from 'react';

type ButtonVariant='primary' | 'secondary' | 'neutral' | 'default'

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    children:ReactNode,
    variant?:ButtonVariant
}
