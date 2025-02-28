import Link from 'next/link';
import LinkedInIcon from './icons/LinkedInIcon';
import InstagramIcon from './icons/InstagramIcon';
import FacebookIcon from './icons/FacebookIcon';
import XIcon from './icons/XIcon';

export default function SocialMediaLinks() {
  return (
    <div className='flex gap-4 mt-4'>
      <Link
        href='https://linkedin.com'
        aria-label='LinkedIn'
        className='hover:text-white'>
        <LinkedInIcon />
      </Link>
      <Link
        href='https://instagram.com'
        aria-label='Instagram'
        className='hover:text-white'>
        <InstagramIcon />
      </Link>
      <Link
        href='https://facebook.com'
        aria-label='Facebook'
        className='hover:text-white'>
        <FacebookIcon />
      </Link>
      <Link
        href='https://twitter.com'
        aria-label='Twitter/X'
        className='hover:text-white'>
        <XIcon />
      </Link>
    </div>
  );
}
