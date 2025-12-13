'use client';

import Button from "../Button";
import Container from "../Container";
import { FaChevronRight } from "react-icons/fa";
import ProjectBox from "./ProjectBox";
import Disney from "@/public/images/disney.jpeg";

const Projects = () => {
  return (
    <div className="md:pt-24 pt-20 ">
      <Container>
        {/* Header */}
        <div className="flex flex-row items-center mb-6">
          <Button label="Projects" variant="secondary" />
          <div className="flex">
            <FaChevronRight className="text-gray-600" size={26}/>
            <FaChevronRight className="text-gray-500" size={26}/>
            <FaChevronRight className="text-gray-400" size={26}/>
          </div>
        </div>

        {/* Section Title */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
            Here are Some of <br className="hidden md:block"/> the Projects I've Built
          </h1>
          <p className="mt-2 md:mt-0 text-gray-600 max-w-md">
            These projects showcase my skills in building modern, responsive web applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="flex flex-col md:flex-row md:flex-wrap gap-4">
          <ProjectBox 
            ImageUrl={Disney}
            ProjectName="Disney Clone"
            Stack="React"
          />
          <ProjectBox 
            ImageUrl={Disney}
            ProjectName="Disney Clone"
            Stack="React"
          />
        </div>

      </Container>
    </div>
  );
};

export default Projects;
