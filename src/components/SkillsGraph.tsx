import React from "react"
import "../index.css"

import git from '../assets/socialLinks/git.png';
import gittool from '../assets/devImg/gittool.png';
import cplusplus from '../assets/devImg/cplusplus.png';
import css from '../assets/devImg/css.png';
import docker from '../assets/devImg/docker.png';
import java from '../assets/devImg/java.png';
import avalonia from '../assets/devImg/avalonia.png';
import post from '../assets/devImg/post.png';
import react from '../assets/devImg/react.png';
import sql from '../assets/devImg/sql.png';
import ssh from '../assets/devImg/ssh.png';
import typescript from '../assets/devImg/typescript.png';
import vue from '../assets/devImg/vue.png';

interface Skill {
    name: string;
    experience: string;
    image: string;
    colour: string;
}

export interface GraphProps {
    data: Skill[];
    title: string;
    className?: string;
}

type ImageMap = {
    [key: string]: string;
}

const imageMap: ImageMap = {
    git,
    gittool,
    cplusplus,
    css,
    docker,
    java,
    avalonia,
    post,
    react,
    sql,
    ssh,
    typescript,
    vue
}

const SkillsGraph: React.FC<GraphProps> = ({ className, data, title }: GraphProps): JSX.Element => {
    return (
        <div className={` ${className} `}>
            <h1 className="text-xl text-center underline underline-offset-8 decoration-[#d72638]">{title}</h1>
            <div className="flex m-3 h-[450px]">
                <div className="flex flex-col gap-20 p-2">
                    <p className="border-b-2 border-[#eee] ~lg/sm:~text-base/sm">Expert</p>
                    <p className="border-b-2 border-[#eee] ~lg/sm:~text-base/sm">Proficient</p>
                    <p className="border-b-2 border-[#eee] ~lg/sm:~text-base/sm">Comfortable</p>
                    <p className="border-b-2 border-[#eee] ~lg/sm:~text-base/sm">Learning</p>
                </div>
                {data.map(({ name, experience, image, colour}) => (
                    <div key={ name } className="flex flex-col justify-end items-center"> 
                        <div className="flex items-center ~lg/sm:~w-20/10" style={{ height: `${Number(experience) * 400}px`, backgroundColor: colour }}> 
                            <img src={imageMap[image]} alt="skill" className="mx-auto ~lg/sm:~w-11/7"/>
                        </div>
                        <p className="text-center ~lg/sm:~text-base/xs border-b-2 border-[#eee]">{ name }</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillsGraph;