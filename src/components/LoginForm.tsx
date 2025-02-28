'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { type Login, loginSchema } from '@dokan/schemas/auth';
import Input from './ui/Input';
import Button from './ui/Button';
import Link from 'next/link';
import GoogleButton from './ui/GoogleButton';

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
    shouldUseNativeValidation: false,
    reValidateMode: 'onChange',
  });

  const onSubmit = async (data: Login) => {
    console.log('Login attempt with:', data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col gap-10  text-lg'
      noValidate // hide native validation, use custom validation only
    >
      <div className='flex flex-col gap-6'>
        <Input
          label='Email'
          id='email'
          type='email'
          placeholder='Enter your email'
          {...register('email')}
          error={errors.email?.message}
        />
        <Input
          label='Password'
          id='password'
          type='password'
          placeholder='Enter your password'
          {...register('password')}
          error={errors.password?.message}
        />
      </div>

      <div className='flex flex-col gap-4'>
        <Button type='submit' loading={isSubmitting}>
          Login
        </Button>

        {/* Divider */}
        <p className='text-[#383838] text-center'>or</p>

        <GoogleButton />
      </div>
      <div className='mt-6'>
        <p className='text-base text-center text-gray-600'>
          Didn&apos;t have an account?{' '}
          <Link
            href='/register'
            className='text-gray-900 font-medium underline'>
            Register
          </Link>
        </p>
      </div>
    </form>
  );
}
