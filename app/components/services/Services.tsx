'use client';

import Button from "../Button";
import { FaChevronRight } from "react-icons/fa";
import ServiceBox from "./ServiceBox";

const Services = () => {
  const ChevronGroup = () => (
    <div className="flex ml-2">
      <FaChevronRight className="text-gray-600" size={20} />
      <FaChevronRight className="text-gray-500" size={20} />
      <FaChevronRight className="text-gray-400" size={20} />
    </div>
  );

  return (
    <div className="py-20 md:py-32   ">
      <div className="flex flex-row items-center mb-6">
        <Button label="SERVICES" variant="secondary" />
        <ChevronGroup />
      </div>

      <div className="flex flex-col md:flex-row gap-12 md:gap-8">
        <div className="md:w-1/3">
          <h1 className="font-semibold text-3xl md:text-4xl mb-3 leading-snug">
            Offer a range of services to elevate your projects
          </h1>
          <p className="mb-8 text-gray-700 text-base">
            Everything you need to launch or grow your web product — front end, back end, APIs, deployment, and optimization. I build clean, scalable solutions with modern tools.
          </p>
          <Button label="Contact Me" variant="primary" />
        </div>

        <div className="md:w-2/3">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ServiceBox 
              heading="Frontend Development" 
              desc="Crafting clean, responsive, interactive user interfaces and reusable components using modern technologies like React.js and Next.js."
              darkBg={true} 
            />
            <ServiceBox 
              heading="Backend Development" 
              desc="Building secure, scalable server-side logic and infrastructure with Node.js, Express.js, and Next.js for smooth, reliable performance."
            />
            <ServiceBox 
              heading="API Integration" 
              desc="Seamlessly connecting your frontend and backend using RESTful and GraphQL APIs, ensuring efficient data flow across your application."
            />
            <ServiceBox 
              heading="Deployment & Optimization" 
              desc="Deploying applications with modern platforms and optimizing for performance, scalability, and security."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
