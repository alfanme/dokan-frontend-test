import React from 'react';
import Button from './Button';
import GoogleIcon from '../icons/GoogleIcon';

export default function GoogleButton(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  return (
    <Button type='button' variant='secondary' className='gap-4' {...props}>
      <GoogleIcon />
      <p className='font-sans-secondary'>Continue with Google</p>
    </Button>
  );
}
