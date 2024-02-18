import React, { useState } from 'react';
import nsccbot from '../assets/nsccbot.png';
import quickpoll from '../assets/quickpoll.png';
import oldportfolio from '../assets/oldportfolio.png';

interface ProjectCardProps {
    title: string;
    image: string;
    description: string;
    content: string;
    link: string;
}

type ImageMap = {
    [key: string]: string;
};

const imageMap: ImageMap = {
    nsccbot,
    quickpoll,
    oldportfolio,
  };

const ProjectCard: React.FC<ProjectCardProps> = ({ title, image, description, content, link }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`project-card w-[400px] hover:scale-105 duration-300 m-5 p-2 bg-background-darkblue border-2 border-bold-red`} onClick={handleToggle}>
      <b className='text-text-offwhite bg-background-darkblue'>{title}</b>
      <img src={imageMap[image]} alt={title} className={`transition-filter duration-300 hover:filter-none grayscale${isExpanded ? '-0' : ''}`} />
      {isExpanded && (
        <div className="flex flex-col gap-2 mt-4 bg-background-darkblue">
          <p>{description}</p>
          <p>{content}</p>
          <a className='bg-background-darkblue font-serif' href={link}>
          <b> Check this out on github </b>
          </a>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;