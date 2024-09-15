"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
// import { Button } from './ui/button';
// import { IoLogOutOutline } from "react-icons/io5";

const Navbar = () => {
    const [isMenuOpen , setIsMenuOpen] = useState(false) ;
    const [isScrolled , setIsScrolled] = useState(false) ;
  // Effect to change navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`text-white-100 p-5  fixed w-full z-10 ${isScrolled || isMenuOpen? ' shadow-md ': 'bg-transparent '}`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* <img src="/logo.svg" className="text-2xl font-bold" /> */}
        <h1 className='text-purple font-extrabold text-2xl'>@AB.</h1>
        <nav className="hidden md:flex space-x-6 ">
          <a href="/home" className="font-bold hover:text-purple">Home</a>
          <a href="/howItWorks" className="font-bold hover:text-purple">How it Works</a>
          <a href="/testimonials" className="font-bold hover:text-purple">Testimonials</a>
          <a href="#" className="font-bold hover:text-purple">Contact</a>
        </nav>


          <button></button>

        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
          {isMenuOpen ? <X />  : <Menu />}
        </button>
      </div>
      {isMenuOpen && (
        
        <motion.nav 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col space-y-2 mt-4 md:hidden"
        >
          <a href="/home" className="  hover:text-purple">Home</a>
          <a href="/howItWorks" className=" hover:text-purple">How it Works</a>
          <a href="/testimonials" className=" hover:text-purple">Testimonials</a>
          <a href="#" className=" hover:text-purple">Contact</a>

        </motion.nav>
      )}
    </header>
  );
};

export default Navbar;
