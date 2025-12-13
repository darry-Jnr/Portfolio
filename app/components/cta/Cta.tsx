'use client';

import Image from "next/image";
import Button from "../Button";
import DarkBg from "@/public/images/CTA.webp"; // ← your dark image

const Cta = () => {
  return (
    <section className="relative mt-5">
       
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={DarkBg}
          alt="CTA background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      
        <div className="pt-10 pb-10 text-center  text-white max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
            Let’s Build Something<br className="block md:hidden"/> <span className="text-blue-500">Great</span>
          </h2>

          <p className="mt-6 text-gray-300 text-base md:text-lg">
            I help businesses and individuals turn ideas into fast, scalable, 
            and modern web applications. From concept to deployment, I focus 
            on clean code and great user experience.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button label="Get in Touch" />
            <Button label="View Portfolio" variant="secondary" />
          </div>
        </div>
      
    </section>
  );
};

export default Cta;
