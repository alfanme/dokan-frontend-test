'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FC, useState } from 'react';
import Button from './ui/Button';
import clsx from 'clsx';

interface HeaderProps {
  brandName?: string;
}

const Header: FC<HeaderProps> = ({ brandName = 'TEST' }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className='flex align-center bg-white border-b border-[#D9DEDD] h-24 relative'>
      <div className='container mx-auto px-4 flex gap-8 items-center justify-between'>
        {/* Mobile menu button */}
        <button
          className='md:hidden flex items-center cursor-pointer'
          onClick={() => setIsNavOpen(!isNavOpen)}>
          <i className='ph-bold ph-list text-2xl' />
        </button>

        {/* Logo/Brand section */}
        <Link href='/' className='flex items-center gap-2 font-medium text-2xl'>
          <Image src='/logo.svg' alt='Logo' width={24} height={24} priority />
          <p>{brandName}</p>
        </Link>

        {/* Navigation Items */}
        <nav
          className={clsx(
            'absolute top-24 left-0 w-full bg-white py-8 border-b border-[#D9DEDD] transition-all duration-300',
            'md:border-0 md:py-0 md:static md:w-auto md:flex md:items-center md:bg-transparent',
            { block: isNavOpen, hidden: !isNavOpen }
          )}>
          <ul className='flex flex-col md:flex-row gap-6 font-medium items-center'>
            <li>
              <Link
                href='/about'
                className='text-dark-green hover:text-grey-6'
                onClick={() => setIsNavOpen(false)}>
                About us
              </Link>
            </li>
            <li>
              <Link
                href='/team'
                className='text-dark-green hover:text-grey-6'
                onClick={() => setIsNavOpen(false)}>
                Team
              </Link>
            </li>
            <li>
              <Link
                href='/solutions'
                className='text-dark-green hover:text-grey-6'
                onClick={() => setIsNavOpen(false)}>
                Solutions
              </Link>
            </li>
            <li>
              <Link
                href='/blog'
                className='text-dark-green hover:text-grey-6'
                onClick={() => setIsNavOpen(false)}>
                Blog
              </Link>
            </li>
          </ul>
        </nav>

        {/* Dashboard button */}
        <Link href='/dashboard' className='ml-auto md:ml-0'>
          <Button variant='tertiary'>
            Dashboard
            <i className='ph-bold ph-arrow-right w-5 h-5' />
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
