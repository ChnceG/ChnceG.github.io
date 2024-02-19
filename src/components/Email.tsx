import React from "react";

interface EmailProps {
  email: string;
  className?: string;
}

const Email: React.FC<EmailProps> = ({ email, className }) => {
    return (
      <div className={`flex flex-col fixed right-0 top-1/2 mx-2 bg-transparent ${className}`}>
        <a href="cbgrandy@gmail.com" className="my-2 rotate-90 translate-x-16 -translate-y-2 bg-transparent">{email}</a>
      </div>
    );
  };
  
export default Email;