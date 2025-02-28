'use client';

import React from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  variant?: 'primary' | 'secondary' | 'tertiary';
}

export default function Button({
  children,
  variant = 'primary',
  loading,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        'w-full py-3 px-4 flex items-center justify-center gap-2 transition duration-200 cursor-pointer',
        {
          'bg-blue-900 text-white hover:bg-blue-800 disabled:opacity-50 rounded-lg shadow-[0px_0px_0px_1px_#2E98A2,0px_1px_2px_0px_#257A82]':
            variant === 'primary',
          'border border-gray-300 hover:bg-gray-50 rounded-lg shadow-[0px_0px_0px_1px_#EFF0F2,0px_1px_2px_0px_#EFF0F280]':
            variant === 'secondary',
          'border border-blue-600 rounded-full px-5 py-3 font-medium hover:bg-blue-600 hover:text-white':
            variant === 'tertiary',
        },
        className
      )}
      disabled={loading || props.disabled}
      {...props}>
      {loading ? 'Loading...' : children}
    </button>
  );
}
