'use client';

interface InputProps {
    number: number;
    title: string;
    // Optional prop for the input element to be rendered (e.g., a text box, textarea)
    children?: React.ReactNode; 
}

const Input = ({ number, title, children }: InputProps) => {
  
  // Format the number to include a leading zero if it's a single digit (e.g., 01, 02)
  const formattedNumber = number.toString().padStart(2, '0');

  return (
    <>
      
      {/* Question Row: Number + Title */}
      <div className="flex flex-row items-baseline gap-4 mb-4">
        
        {/* The Question Number (Large and slightly lighter) */}
        <span className="text-xl font-medium text-gray-500">
          {formattedNumber}
        </span>
        
        {/* The Question Title (Large and bold) */}
        <h1 className="text-xl font-semibold text-gray-800">
          {title}
        </h1>
      </div>
      
      {/* Input Placeholder Area */}
      <div className="ml-10 mt-2">
        {/* Placeholder for the actual input field (which you'll define later) */}
        {/* The text "John Doe" in the screenshot is where the input value appears */}
        <div className="text-gray-900 text-lg py-2 border-b border-gray-400 focus-within:border-black transition duration-200">
            {children || <span className="text-gray-400">Your Answer Here...</span>}
        </div>
      </div>
      </>
  );
}

export default Input;