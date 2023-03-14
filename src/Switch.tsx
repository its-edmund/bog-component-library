import React, { FC, InputHTMLAttributes } from 'react';

export interface SwitchProps extends InputHTMLAttributes<HTMLInputElement> {
  /** custom content, defaults to 'the snozzberries taste like snozzberries' */
  label?: string;
  disabled?: boolean;
}

export const Switch: FC<SwitchProps> = ({
  label,
  disabled = false,
  ...props
}) => {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <span className="text-sm font-medium text-gray-900 mr-3">{label}</span>
      <div className="inline-flex items-center relative">
        <input
          type="checkbox"
          className="sr-only peer"
          disabled={disabled || false}
        />
        <div className="w-[43px] h-6 bg-function-disabled peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:top-[3px] after:left-[3px] after:bg-white after:rounded-full after:h-[18px] after:w-[18px] after:transition-all peer-checked:bg-midnight-300 peer-disabled:peer-checked:bg-midnight-300/40 peer-disabled:bg-[#d9d9d9]/40 peer-disabled:cursor-not-allowed transition-colors after:absolute"></div>
      </div>
    </label>
  );
};
