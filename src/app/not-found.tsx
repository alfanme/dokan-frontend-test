import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='flex flex-col justify-center align-center text-center w-full min-h-screen'>
      <h2 className='font-bold text-[3.875rem]'>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href='/' className='text-blue-600'>
        Return Home
      </Link>
    </div>
  );
}
