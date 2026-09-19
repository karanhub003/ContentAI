import React from "react";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  ...props
}) {
  const variants = {
    primary:
      "bg-linear-to-r from-purple-700/25 to-purple-900/5 text-white hover:bg-[#8B5CF6] cursor-pointer",
    secondary: "bg-[#8B5CF6] text-white hover:bg-[#7B1FA2] cursor-pointer",
    outline: "border border-[#263244] text-white hover:bg-[#172033] cursor-pointer",
    ghost: "text-[#94A3B8] hover:bg-[#172033] hover:text-white cursor-pointer",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm font-medium",
    md: "px-4 py-2.5 text-sm font-semibold",
    lg: "px-5 py-3 text-base font-semibold",
  };
  return (
    <div className={` text-center rounded-lg flex justify-center items-center
        
        ${variants[variant]}
        ${sizes[size]}
        ${className}
        
      `}
        {...props}>
      <button className="cursor-pointer" onClick={onClick}>
        {children}
      </button>
    </div>
  );
}
