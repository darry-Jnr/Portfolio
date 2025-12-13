'use client';
import Link from "next/link";


const Footer = () => {


// Base style for mobile menu links
const linkStyle = "text-sm font-semibold text-[#171717] hover:text-blue-600 transition-colors  px-4 border-b border-gray-100";

  return (
    <div className="pt-6 ">
        
        <hr className="bg-gray-300"/>
      <nav className="justify-between flex ">

        <div className=" flex-row gap-3 hidden py-4 md:block">
        <Link href="/" className={linkStyle}>HOME</Link>
        <Link href="/about" className={linkStyle}>ABOUT ME</Link>
        <Link href="/portfolio" className={linkStyle}>MY PORTFOLIO</Link>
        </div>

        <div className="flex flex-row justify-between py-4 gap-3">
        <Link href="/" className={linkStyle}>LINKLEDLN</Link>
        <Link href="/about" className={linkStyle}>GITHUB</Link>
        <Link href="/portfolio" className={linkStyle}>FACEBOOK</Link>
        </div>
      </nav>
      
    </div>
  )
}

export default Footer
