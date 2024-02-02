import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

const handleButtonClick = () => {
    window.location.href = "mailto:cbgrandy@gmail.com";
}

export default function Button({ children, className }: ButtonProps): JSX.Element {
  return (
    <button onClick={handleButtonClick} className={`${className} bg-bold-red text-text-offwhite font-impact p-3 rounded-md shadow-slate-900 shadow-md`}>
      {children}
    </button>
  );
}