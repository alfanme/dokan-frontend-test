import Link from 'next/link';

export default function Home() {
  return (
    <div className='flex flex-col justify-center align-center text-center w-full min-h-screen'>
      <h2 className='font-bold text-[3.875rem]'>Home Page</h2>
      <p>Go to login page by clicking &lsquo;Login&lsquo; below</p>
      <Link href='/login' className='text-blue-600'>
        Login
      </Link>
    </div>
  );
}
