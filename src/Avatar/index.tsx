import classNames from 'classnames';
import React, { FC, HTMLAttributes, ReactChild } from 'react';
import { DefaultAvatar } from './DefaultAvatar';

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  /** custom content, defaults to 'the snozzberries taste like snozzberries' */
  children?: ReactChild;
  src?: any;
  size?: number;
  status?: 'active' | 'busy';
}

export const Avatar: FC<AvatarProps> = ({ src, status, size, ...props }) => {
  return (
    <div
      className={classNames('relative rounded-full border-2 border-white')}
      style={{
        width: size ? `${size}px` : '64px',
        height: size ? `${size}px` : '64px',
      }}
    >
      <div className="" {...props}>
        {src ? <img src={src} /> : <DefaultAvatar />}
      </div>
      {status && (
        <div
          className={classNames(
            'w-1/4 h-1/4 rounded-full absolute right-[2%] bottom-[2%] border-2 border-light-gray-100',
            {
              'bg-red-700': status == 'busy',
              'bg-green-600': status == 'active',
            }
          )}
        ></div>
      )}
    </div>
  );
};
