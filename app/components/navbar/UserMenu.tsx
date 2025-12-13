'use client';

import Link from "next/link";
import { useState, useCallback } from "react";
import { FiMenu, FiX } from "react-icons/fi"; 
import Cta from "./Cta";

// Base style for mobile menu links
const linkStyle = "text-sm font-semibold text-[#171717] hover:text-blue-600 transition-colors py-4 px-4 border-b border-gray-100";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);
  
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Menu */}
      <nav className="hidden md:flex md:flex-row items-center gap-6">
        <Link href="/" className={linkStyle}>HOME</Link>
        <Link href="/about" className={linkStyle}>ABOUT ME</Link>
        <Link href="/portfolio" className={linkStyle}>MY PORTFOLIO</Link>
      </nav>

      {/* Mobile Menu */}
      <div className="block md:hidden ">
        <div 
            onClick={toggleOpen} 
            className="cursor-pointer hover:opacity-80 transition"
        >
          <FiMenu size={24} />
        </div>

        {isOpen && (
          <div 
            className="
              fixed 
              top-0 
              left-0 
              w-full 
              h-1/2 
              bg-white 
              shadow-2xl 
              
              flex 
              flex-col
            "
          >
            {/* Close button */}
            <div className="flex justify-end p-4 border-b">
                <div onClick={toggleOpen} className="cursor-pointer">
                    <FiX size={28} />
                </div>
            </div>

            {/* Mobile Menu Links */}
            <div className="flex flex-col flex-1 overflow-y-auto pt-6">
                <Link href="/" onClick={handleLinkClick} className={linkStyle}>
                    HOME
                </Link>
                <Link href="/about" onClick={handleLinkClick} className={linkStyle}>
                    ABOUT ME
                </Link>
                <Link href="/portfolio" onClick={handleLinkClick} className={linkStyle}>
                    MY PORTFOLIO
                </Link>
                {/* Optional CTA button */}
                <Cta />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default UserMenu;
