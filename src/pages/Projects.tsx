import ProjectCard from "../components/ProjectCard";
import InfoBox from "../components/InfoBox";
import { projectData } from "../util/ProjectData";
import "../index.css";

const Projects = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl text-bold-red mb-3">Projects</h1>
      </div>
      <div className="grid grid-cols-3 justify-items-center items-start">
        {projectData.map((project, index) => (
          <InfoBox>
            <ProjectCard key={index} {...project} />
          </InfoBox>
        ))}
      </div>
    </div>
  );
};

export default Projects;