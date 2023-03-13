import React, { FC, HTMLAttributes, ReactChild } from 'react';
import classNames from 'classnames';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  /** custom content, defaults to 'the snozzberries taste like snozzberries' */
  children?: ReactChild;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'tertiary';
}

export const Button: FC<ButtonProps> = ({
  children,
  size = 'medium',
  variant = 'primary',
  ...props
}) => {
  const variants = {
    primary:
      'bg-midnight-300 hover:bg-midnight-200 active:bg-midnight-500 focus:bg-midnight-200 text-white disabled:bg-light-gray-700',
    secondary:
      'border border-midnight-300 text-midnight-300 hover:border-midnight-200 hover:text-midnight-200 active:border-midnight-500 active:text-midnight-500 focus:border-midnight-200 focus:text-midnight-200 bg-white disabled:text-light-gray-700 disabled:border-light-gray-700 box-border',
    tertiary:
      'bg-white text-midnight-300 hover:text-midnight-200 active:text-midnight-500 focus:text-midnight-200 disabled:text-light-gray-700',
  };

  const sizes = {
    small: 'px-[11px] py-1.5',
    medium: 'px-3 py-1.5',
    large: 'px-4 py-2',
  };

  return (
    <button
      className={classNames(
        'rounded-[4px] font-bold transition-colors disabled:cursor-not-allowed',
        sizes[size],
        variants[variant]
      )}
      {...props}
    >
      {children || 'Button'}
    </button>
  );
};
