'use client';
import Image, { StaticImageData } from "next/image";

interface ProjectBoxProps {
  ImageUrl: string | StaticImageData;
  ProjectName: string;
  Stack?: string;
}

const ProjectBox = ({ ImageUrl, ProjectName, Stack }: ProjectBoxProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden  w-full md:w-[48%]">
      <div className="relative w-full h-48 md:h-64">
        <Image 
          src={ImageUrl}
          alt={ProjectName}
          fill
          
          
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{ProjectName}</h3>
        {Stack && (
          <p className="text-sm text-gray-600 mt-1">{Stack}</p>
        )}
      </div>
    </div>
  );
};

export default ProjectBox;
