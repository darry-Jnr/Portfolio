'use client';

interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary"; // Primary = CTA, Secondary = section indicator
  onClick?: () => void;
}

const Button = ({ label, variant = "primary", onClick }: ButtonProps) => {
  // Primary = CTA
  const primaryStyle = "p-2 md:p-4 rounded-lg text-white font-medium bg-black hover:bg-[#0677EC] transition-colors";
  
  // Secondary = Section indicator
  const secondaryStyle = "py-2 px-4 bg-white text-black font-medium rounded-xl border border-gray-300 border-r-white";
  
  const appliedStyle = variant === "primary" ? primaryStyle : secondaryStyle;

  return (
    <button className={appliedStyle} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
