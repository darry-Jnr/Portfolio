"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  // Function to handle click
  const handleClick = () => {
    router.push('/'); // Navigate to home
  };

  return (
    <div className="flex items-center gap-2 cursor-pointer" onClick={handleClick}>
      <Image 
        src="/window.svg"
        width={40}
        height={40}
        alt="Logo"
      />
      <span className="text-lg md:text-2xl font-light">Darry</span>
    </div>
  );
};

export default Logo;
