import Slider from "react-slick";
import { projectData } from "../util/projectData";
import nsccbot from '../assets/projectScreenshots/nsccbot.png';
import quickpoll from '../assets/projectScreenshots/quickpoll.png';
import oldportfolio from '../assets/projectScreenshots/oldportfolio.png';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

interface ProjectProps {
    className?: string;
}

type ImageMap = {
    [key: string]: string;
}

const imageMap: ImageMap = {
    nsccbot,
    quickpoll,
    oldportfolio
}

const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    pauseOnHover: true
  }

const ProjectCarousel: React.FC<ProjectProps> = ({ className }: ProjectProps): JSX.Element => {
    return (
        <div className={` ${className} `}>
            <Slider { ...settings }>
                    {projectData.map(({ title, date, image, description, content, link }) => (
                        <div key={title}>
                            <div className="flex gap-8 items-center bg-[#eee]/5 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
                                <div className="w-1/2">
                                    <img
                                    src={imageMap[image]}
                                    alt={title}
                                    className="w-full aspect-[4/3] object-contain rounded-xl"
                                    />
                                </div>
                                <div className="w-1/2 flex flex-col justify-between space-y-4">
                                    <div className="flex justify-between items-end mb-4">
                                        <a
                                        href={link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-3xl font-impact underline underline-offset-4 decoration-[#d72638] hover:text-[#d72638] hover:scale-105 duration-300 active:text-[#000]"
                                        >
                                            {title}
                                        </a>
                                        <p className="text-base italic text-zinc-400">{date}</p>
                                    </div>
                                    
                                    <p className="text-lg text-zinc-200">{description}</p>
                                    <p className="text-sm text-zinc-400">{content}</p>
                                </div>
                            </div>
                      </div>
                    ))}
            </Slider>
        </div>
    );
};

export default ProjectCarousel;
