import ProjectCard from '../components/ProjectCard';
import { projectData } from '../util/ProjectData';
import '../index.css';

const Projects = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl text-bold-red">Projects</h1>
      </div>
      <div className="grid grid-cols-3 justify-items-center items-start">
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;