import clsx from 'clsx';
import { useState } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export default function Input({
  label,
  error,
  type = 'text',
  ...props
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';

  return (
    <div className='flex flex-col gap-3.5'>
      <label htmlFor={props.id} className='block text-gray-700'>
        {label}
      </label>
      <div className='relative'>
        <input
          {...props}
          type={isPassword && showPassword ? 'text' : type}
          className={clsx(
            'w-full px-4 py-3 rounded-[0.625rem] bg-white border-[1.5px] focus:outline-none focus:ring-2 focus:ring-blue-600 placeholder:text-[#c2c2c2]',
            error ? 'border-red-500' : 'border-[#c2c2c2]',
            isPassword && 'pr-11'
          )}
        />
        {isPassword && (
          <button
            type='button'
            className='flex items-center absolute right-4 top-1/2 transform -translate-y-1/2 '
            onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <i className='ph ph-eye-slash w-5 h-5' />
            ) : (
              <i className='ph ph-eye w-5 h-5' />
            )}
          </button>
        )}
      </div>
      {error && <p className='text-red-500 text-sm mt-1'>{error}</p>}
    </div>
  );
}
