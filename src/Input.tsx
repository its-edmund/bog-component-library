import React, { FC, InputHTMLAttributes, ReactChild } from 'react';
import classNames from 'classnames';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** custom content, defaults to 'the snozzberries taste like snozzberries' */
}

export const Input: FC<InputProps> = ({ ...props }) => {
  return (
    <input
      className={classNames(
        'border border-function-border bg-function-background placeholder:text-dark-300 rounded-[4px] px-2 py-2 hover:border-midnight-200 transition-colors outline-none focus:border-midnight-300 disabled:placeholder:text-function-disabled disabled:border-function-border disabled:cursor-not-allowed'
      )}
      {...props}
    />
  );
};
