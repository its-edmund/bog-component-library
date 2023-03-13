import React, { FC, HTMLAttributes, ReactChild } from 'react';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  /** custom content, defaults to 'the snozzberries taste like snozzberries' */
  children?: ReactChild;
}

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
/**
 * A custom Thing component. Neat!
 */
export const Button: FC<Props> = ({ children, ...props }) => {
  return (
    <button className="bg-midnight-300 px-4 py-2 text-white rounded-[4px] font-bold transition-colors hover:bg-midnight-200 active:bg-midnight-500 focus:bg-midnight-200 disabled:bg-light-gray-700">
      {children || 'Button'}
    </button>
  );
};
