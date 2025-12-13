'use client';

import Button from "../Button";
import Container from "../Container";
import { FaChevronRight } from 'react-icons/fa';

const TechStack = () => {
const ListStyle = "px-3 py-1 bg-gray-200 text-[#0677EC] rounded-full text-sm font-semibold"

  return (
    <div className="pt-24 ">
      <Container>
        <div className="flex flex-row items-center mb-6">
            <Button 
            label="Tech Stack"
            variant="secondary"
            />
            <div className="flex">
            <FaChevronRight className="text-gray-600" size={26}/>
            <FaChevronRight className="text-gray-500" size={26}/>
            <FaChevronRight className="text-gray-400" size={26}/>
            </div>
        
        </div>

        <div className="bg-gray-100 md:rounded-4xl rounded-xl">
        <p className="mt-4 text-gray-700 py-10 text-sm md:px-10 px-2 md:text-base">
        {/* These are the tools and technologies I work with to build fast, modern, and responsive web applications. */}
        My tech stack represents the tools, frameworks, and libraries I use to bring ideas to life. 
         This section showcases the core tools 
         I rely on to develop web applications that are both functional and visually appealing.
        </p>
       
        <ul className="flex flex-wrap gap-3 md:px-10 pb-10">
  <li className={ListStyle}>HTML</li>
  <li className={ListStyle}>CSS</li>
  <li className={ListStyle}>JavaScript</li>
  <li className={ListStyle}>Tailwind CSS</li>
  <li className={ListStyle}>React</li>
  <li className={ListStyle}>Next.js</li>
  <li className={ListStyle}>Node.js</li>
  <li className={ListStyle}>Express.js</li>
</ul>


        </div>
      </Container>
    </div>
  )
}

export default TechStack
