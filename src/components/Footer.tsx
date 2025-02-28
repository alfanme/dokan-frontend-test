// components/Footer.tsx
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import SocialMediaLinks from './SocialMediaLinks';

const Footer: FC = () => {
  return (
    <footer className='bg-dark-footer font-sans-secondary text-white py-20'>
      <div className='container flex flex-col gap-40 mx-auto px-4'>
        <div className='flex flex-col gap-14 md:flex-row md:justify-between'>
          {/* Logo and company info */}
          <div className='space-y-3 text-dark-grey'>
            <Link href='/' className='inline-block'>
              <Image src='/logo.svg' alt='Dokan Logo' width={40} height={40} />
            </Link>
            <p className='text-sm'>Dokan Front End Test</p>
            <SocialMediaLinks />
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 text-xl'>
            {/* Navigation columns */}
            <div className='space-y-3'>
              <Link href='/home' className='block hover:text-gray-300'>
                Home
              </Link>
              <Link href='/features' className='block hover:text-gray-300'>
                Features
              </Link>
              <Link href='/pricing' className='block hover:text-gray-300'>
                Pricing
              </Link>
            </div>

            <div className='space-y-3'>
              <Link href='/about-us' className='block hover:text-gray-300'>
                About Us
              </Link>
              <Link href='/integrations' className='block hover:text-gray-300'>
                Integrations
              </Link>
              <Link href='/faqs' className='block hover:text-gray-300'>
                FAQs
              </Link>
            </div>

            <div className='space-y-3'>
              <Link href='/blog' className='block hover:text-gray-300'>
                Blog
              </Link>
              <Link href='/contact-us' className='block hover:text-gray-300'>
                Contact Us
              </Link>
              <Link href='/terms' className='block hover:text-gray-300'>
                Terms & Policies
              </Link>
            </div>

            {/* Contact information */}
            <div className='flex flex-col gap-[1.875rem]'>
              <h3>Our Contact</h3>
              <div className='space-y-3 text-lg text-light-grey'>
                <div className='flex items-center gap-3'>
                  <i className='ph-fill ph-envelope text-base' />
                  <p>dokan@test.sa</p>
                </div>

                <div className='flex items-center gap-3'>
                  <i className='ph-fill ph-phone text-base' />
                  <p>+999-234-324</p>
                </div>

                <div className='flex items-center gap-3'>
                  <i className='ph-fill ph-map-pin-area text-base' />
                  <p>Saudi Arabia, Jeddah</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright and links */}
        <div className='flex flex-col md:flex-row justify-between items-center text-dark-grey'>
          <div className='mb-4 md:mb-0'>
            © {new Date().getFullYear()} Dokan Inc. All rights reserved.
          </div>

          <div className='flex gap-6'>
            <Link href='/privacy' className='hover:text-white'>
              Privacy policy
            </Link>
            <Link href='/gdpr' className='hover:text-white'>
              GDPR
            </Link>
            <Link href='/terms-of-service' className='hover:text-white'>
              Terms of service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
