"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='fixed w-full bg-surface/80 backdrop-blur-lg border-b border-white/10 z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center'>
            <Link href='/' className='text-xl font-bold text-gradient'>
              DevShare
            </Link>
          </div>

          <div className='hidden md:block'>
            <div className='ml-10 flex items-center space-x-4'>
              <Link
                href='/explore'
                className='text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
              >
                Explore
              </Link>
              <Link
                href='/auth/sign-in'
                className='text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
              >
                Sign In
              </Link>
              <Link
                href='/auth/sign-up'
                className='bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-md text-sm font-medium'
              >
                Sign Up
              </Link>
            </div>
          </div>

          <div className='md:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='text-gray-300 hover:text-white p-2'
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className='md:hidden'>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-surface border-b border-white/10'>
            <Link
              href='/explore'
              className='text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
            >
              Explore
            </Link>
            <Link
              href='/auth/sign-in'
              className='text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
            >
              Sign In
            </Link>
            <Link
              href='/auth/sign-up'
              className='bg-primary hover:bg-primary-hover text-white block px-3 py-2 rounded-md text-base font-medium'
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
