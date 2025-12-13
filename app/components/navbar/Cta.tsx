"use client";

import Link from "next/link";
import Button from "../Button";


const Cta = () => {
  return (
    <Link href="/contact" className="hidden md:block">
     <Button 
     label="Get In Touch"
     variant="primary"
     /> 
    </Link>
  )
}

export default Cta
