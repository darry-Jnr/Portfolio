'use client';

import Container from "../Container";
import Cta from "./Cta";
import Logo from "./Logo";
import UserMenu from "./UserMenu";

const Navbar = () => {
  return (
    <div className=" w-full bg-white shadow-sm">
        <div className="py-4 border-b border-gray-300">
        <Container>
            <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <UserMenu />
            <Cta />
            </div>
       
        </Container>
       
        </div>
      
    </div>
  )
}

export default Navbar