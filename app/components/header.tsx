"use client";

import { useState } from "react";
import NavLinks from "../ui/home/nav-links";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const checkButtonColor = (pathName: string) => {
  console.log(pathName.includes("posts"));
  if (pathName.includes("services")) return "text-white";
  if (pathName.includes("blog")) return "text-medium-pink";
  if (pathName.includes("posts")) return "text-white";

  return "text-gray-900";
};

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathName = usePathname();
  const textColor = checkButtonColor(pathName);

  const handleCloseMenu = () => setMenuOpen(false);

  return (
    <header className='absolute inset-x-0 top-0 z-10'>
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
            className='inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
            aria-controls='mobile-menu'
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className='sr-only'>Open main menu</span>
            <svg
              className='block h-6 w-6'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              aria-hidden='true'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
        <div className='hidden lg:flex lg:gap-x-12'>
          <NavLinks closeMenu={handleCloseMenu} />
        </div>
        <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
          <Link
            href='/contact'
            className={`text-sm font-semibold leading-6 ${textColor} hover:text-medmium-pink`}
          >
            Start now <span aria-hidden='true'>→</span>
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className='fixed inset-0 z-20  backdrop-blur-lg p-6 lg:hidden overflow-auto custom-backdrop-blur'
          id='mobile-menu'
        >
          <div className='flex justify-end'>
            <button
              type='button'
              className={`inline-flex items-center justify-center rounded-md p-2.5 ${textColor} focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500`}
              onClick={handleCloseMenu}
            >
              <span className='sr-only'>Close main menu</span>
              <svg
                className='block h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
          <div className='space-y-6 px-4 pt-4 pb-6 sm:px-6'>
            <NavLinks closeMenu={handleCloseMenu} />
          </div>
        </div>
      )}
    </header>
  );
}
