import React, { FC, HTMLAttributes, ReactChild } from 'react';
import classNames from 'classnames';
import {
  AlertIcon,
  FilledAlertIcon,
  FilledCheckCircle,
  FilledInfoIcon,
  XIcon,
} from './Icon';

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  /** custom content, defaults to 'the snozzberries taste like snozzberries' */
  children?: ReactChild;
  title?: string;
  type?: 'error' | 'success' | 'info' | 'brand';
  variant?: 'filled' | 'outline';
}

export const Alert: FC<AlertProps> = ({
  children,
  title,
  type = 'info',
  variant = 'filled',
  ...props
}) => {
  const icon = {
    error: <FilledAlertIcon />,
    success: <FilledCheckCircle />,
    info: <FilledInfoIcon />,
    brand: <FilledInfoIcon />,
  };

  const types = {
    error: 'bg-red-800 border-red-800 text-red-800',
    success: 'bg-green-700 border-green-700 text-green-700',
    info: 'bg-blue-700 border-blue-700 text-blue-700',
    brand: 'bg-midnight-400 border-midnight-400 text-midnight-400',
  };

  const variants = {
    outline: '!bg-white border',
    filled: '!text-light-gray-100',
  };

  return (
    <div
      className={classNames(
        'absolute rounded-[4px] px-2 py-2 w-1/3 flex flex-row justify-between items-start',
        types[type],
        variants[variant]
      )}
      {...props}
    >
      {icon[type]}
      <div className="flex flex-col mx-2 text-xs w-full">
        {title && title.length > 0 && (
          <span className="font-extrabold uppercase">{title}</span>
        )}
        {children}
      </div>
      <button>
        <XIcon />
      </button>
    </div>
  );
};
