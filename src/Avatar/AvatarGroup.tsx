import React, {
  Children,
  cloneElement,
  FC,
  HTMLAttributes,
  ReactNode,
} from 'react';

export interface AvatarGroupProps extends HTMLAttributes<HTMLDivElement> {
  /** custom content, defaults to 'the snozzberries taste like snozzberries' */
  children?: ReactNode[];
  limit?: number;
}

export const AvatarGroup: FC<AvatarGroupProps> = ({
  children,
  limit,
  ...props
}) => {
  const avatars = Children.toArray(children);

  return (
    <div className="flex flex-row -gap-10" {...props}>
      {Children.map(avatars, (element, key) => {
        return (
          <>
            {(!limit || key < limit) && (
              <div
                className="-mr-6"
                style={{ zIndex: avatars.length - key }}
                key={key}
              >
                {cloneElement(element)}
              </div>
            )}
          </>
        );
      })}
      {limit && avatars.length > limit && (
        <div className="bg-light-gray-500 rounded-full w-16 h-16 border-2 border-white flex justify-center items-center font-bold">
          +{avatars.length - limit}
        </div>
      )}
    </div>
  );
};
