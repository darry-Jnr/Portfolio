'use client';

import Button from "../Button";
import Container from "../Container";

const Hero = () => {
  return (
    <section className="pt-20 md:pt-24">
      <Container>
        {/* Heading */}
        <h1 className="text-3xl md:text-7xl font-medium leading-snug md:leading-tight mb-6">
          Hi, I'm a <br /> Full Stack <br className="hidden md:block" /> Developer
        </h1>

        {/* Paragraph */}
        <p className="text-base md:text-lg text-gray-700 max-w-xl mb-6">
          I build fast, modern, and responsive web applications. From idea to deployment, I create user-friendly experiences with clean and efficient code.
        </p>

        <Button 
        label="View Portfolio"
        variant="primary"
        />
      </Container>
    </section>
  )
}

export default Hero;
