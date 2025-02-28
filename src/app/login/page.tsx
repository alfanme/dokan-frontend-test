'use client';

import LoginForm from '@dokan/components/LoginForm';

export default function LoginPage() {
  return (
    <div className='flex flex-col items-center justify-center px-4 py-[6.5rem] bg-[url(/background.svg)] bg-cover'>
      <div className='flex flex-col gap-20 w-full max-w-md'>
        <div className='flex flex-col gap-6 text-center'>
          <h1 className='text-[3.875rem] font-bold text-gray-900 mb-2'>
            Sign In
          </h1>
          <p className='text-lg text-gray-600'>
            Access our services in one click
          </p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
