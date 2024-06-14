"use client";
import { useState } from "react";
import NavLinks from "../ui/home/nav-links";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathName = usePathname();
  const textColor = pathName === "/pricing" ? "text-white" : "text-gray-900";

  return (
    <>
      <header className='absolute inset-x-0 top-0 z-50'>
        <nav
          className='flex items-center justify-between p-6 lg:px-8'
          aria-label='Global'
        >
          <div className='flex lg:flex-1'>
            <Link href='/' className='-m-1.5 p-1.5'>
              <Image
                className='h-10 w-auto lg:h-12 shadow-md rounded-full'
                src='https://storage.googleapis.com/afterbootcamp/openart-image_Zssjbb-I_1716376231201_raw.png'
                alt='Logo'
                width={40}
                height={40}
              />
            </Link>
          </div>
          <div className='flex lg:hidden'>
            <button
              type='button'
              className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className='sr-only'>Open main menu</span>
              <svg
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                />
              </svg>
            </button>
          </div>
          <div className='hidden lg:flex lg:gap-x-12'>
            <NavLinks />
          </div>
          <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
            <Link
              href='/contact'
              className={`text-sm font-semibold leading-6 ${textColor}`}
            >
              Start now <span aria-hidden='true'>→</span>
            </Link>
          </div>
        </nav>
        {mobileMenuOpen && (
          <div className='lg:hidden'>
            <nav className='space-y-1 px-2 pt-2 pb-3 sm:px-3'>
              <NavLinks />
            </nav>
          </div>
        )}
      </header>
      {children}
    </>
  );
}