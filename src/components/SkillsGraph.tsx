import React from "react";
import "../index.css";

interface Skill {
  name: string;
  experience: string;
  colour: string;
}

interface SkillsGraphProps {
  className?: string;
  skillsData: Skill[];
  title?: string;
}

const SkillsGraph: React.FC<SkillsGraphProps> = ({ className, skillsData, title = "Languages & Frameworks" }: SkillsGraphProps): JSX.Element => {
  return (
    <div className="bg-background-darkblue">
      <p className="text-center text-xl">{title}</p>
      <div className={`${className} flex m-3 h-[250px]`}>
        <div className="flex flex-col gap-7 p-2 bg-background-darkblue">
          <p className="border-b-2">Expert</p>
          <p className="border-b-2">Proficient</p>
          <p className="border-b-2">Comfortable</p>
          <p className="border-b-2">Learning</p>
        </div>
        {skillsData.map(({ name, experience, colour }) => (
          <div key={name} className="flex flex-col justify-end items-center bg-background-darkblue">
            <div className="w-[50px]" style={{ height: `${Number(experience) * 200}px`, backgroundColor: colour }} />
            <p className="text-center border-b-2">{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsGraph;