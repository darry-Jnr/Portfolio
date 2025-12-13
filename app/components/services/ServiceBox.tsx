'use client';

import { MdChevronRight } from 'react-icons/md'; // Import the chevron icon

interface ServiceBoxProps {
    heading: string;
    desc: string;
    // Optional prop to toggle the dark background style
    darkBg?: boolean; 
    // You could also add an 'icon' prop here for more customization!
}

const ServiceBox = ({ heading, desc, darkBg = false }: ServiceBoxProps) => {
    
    // Define the base styles
    const baseStyle = `
        p-8 
        min-h-[250px] 
        rounded-xl 
        transition 
        duration-300 
        relative 
        overflow-hidden
    `;
    
    // Define conditional styles for the dark background box
    const darkStyle = `
        bg-black 
        text-white 
        shadow-2xl 
        hover:shadow-blue-500/50
        
        /* Optional: Add a subtle gradient effect for the background depth */
        bg-gradient-to-br from-gray-900 to-black
    `;
    
    // Define the light style for the other boxes
    const lightStyle = `
        bg-white 
        text-gray-800 
        shadow-lg 
        border 
        border-gray-100 
        hover:shadow-blue-100
    `;

    return (
        // Apply the relevant style based on the darkBg prop
        <div className={`${baseStyle} ${darkBg ? darkStyle : lightStyle}`}>
            
            {/* Optional: You could insert an Image/pattern here
                <Image src={BoxPattern} alt="Background pattern" fill className="opacity-50" />
            */}

            {/* Heading */}
            <h3 className="text-2xl font-semibold mb-3">
                {heading}
            </h3>

            {/* Horizontal Line Separator (Optional) */}
            {/* The line separator in your screenshot is handled by styling the text */}
            {/* <hr className="w-3 border-t-2 border-blue-600 mb-4"/> */}
            
            {/* Description */}
            <p className={`${darkBg ? 'text-gray-300' : 'text-gray-600'} text-base`}>
                {desc}
            </p>

         
            
        </div>
    );
};

export default ServiceBox;