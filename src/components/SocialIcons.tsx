import React from "react";
import instagram from "../assets/instagram.png";
import github from "../assets/git.png";
import linkedin from "../assets/linked.png";
import twitter from "../assets/twitter.png";

interface SocialIconsProps {
    className?: string;
  }
  
const SocialIcons: React.FC<SocialIconsProps> = ({ className }) => {
  const handleIconClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className={`flex flex-col items-center fixed left-0 top-1/2 transform -translate-y-1/2 ${className}`}>
      <div className="border-r-2 border-gray-500 h-full mx-2"></div>
      <img
        src={instagram}
        alt="Instagram"
        className="cursor-pointer my-2 w-6 h-6 hover:scale-125 duration-300"
        onClick={() => handleIconClick("https://www.instagram.com/chancegr30")}
      />
      <div className="h-full mx-2"></div>
      <img
        src={github}
        alt="GitHub"
        className="cursor-pointer my-2 w-6 h-6 hover:scale-125 duration-300"
        onClick={() => handleIconClick("https://github.com/chnceg")}
      />
      <div className="-full mx-2"></div>
      <img
        src={linkedin}
        alt="LinkedIn"
        className="cursor-pointer my-2 w-6 h-6 hover:scale-125 duration-300"
        onClick={() => handleIconClick("https://www.linkedin.com/in/chnceg")}
      />
      <div className="h-full mx-2"></div>
      <img
        src={twitter}
        alt="Twitter"
        className="cursor-pointer my-2 w-6 h-6 hover:scale-125 duration-300"
        onClick={() => handleIconClick("https://twitter.com/Chance_Grandy")}
      />
      <div className="h-full mx-2"></div>
    </div>
  );
};

export default SocialIcons;
