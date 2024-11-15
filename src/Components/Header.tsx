"use client";

import Link from 'next/link';
import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between bg-white py-4 px-8 shadow-md sticky top-0 z-10">
      <Link href="/" legacyBehavior>
        <a className="font-bold text-2xl text-[#3f396d]">SHumaila Waheed</a>
      </Link>

      <div className={`flex gap-12 vercel
         ${isMenuOpen ? 'flex-col absolute top-16 left-0 w-full bg-white shadow-lg py-4 px-0' : 'hidden lg:flex'}`}>
        <Link href="/" legacyBehavior>
          <a className="text-gray-800 text-xl hover:text-[#fca61f]">Home</a>
        </Link>
        <Link href="/#service" legacyBehavior>
          <a className="text-gray-800 text-xl hover:text-[#fca61f]">Service</a>
        </Link>
        <Link href="/about" legacyBehavior>
          <a className="text-gray-800 text-xl hover:text-[#fca61f]">About</a>
        </Link>
        <Link href="/#portfolio" legacyBehavior>
          <a className="text-gray-800 text-xl hover:text-[#fca61f]">Portfolio</a>
        </Link>
        <Link href="/#testimonial" legacyBehavior>
          <a className="text-gray-800 text-xl hover:text-[#fca61f]">Testimonials</a>
        </Link>
        <Link href="/#blog" legacyBehavior>
          <a className="text-gray-800 text-xl hover:text-[#fca61f]">Blog</a>
        </Link>
      </div>

      <button className="hidden lg:block bg-[#fca61f] text-white rounded-full px-6 py-2 text-lg hover:bg-[#2e2a54]">
        Contact
      </button>

      <div className="text-2xl lg:hidden cursor-pointer text-[#3f396d]" onClick={toggleMenu}>
        {isMenuOpen ? '✖' : '☰'} 
      </div>
    </nav>
  );
};

export default Header;
