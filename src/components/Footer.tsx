import { Link } from "react-scroll";

export default function Footer() {
    return (
        <footer className="flex flex-col w-full items-center">
            <div className="text-center border rounded-[50%] h-[25px] w-[25px] cursor-pointer bg-[#eee]/5 group hover:border-[#d72638] hover:scale-10 hover:scale-105 duration-300 active:border-[#000]">
                <Link to="home" smooth={true} duration={500} spy={true} className="text-xl group-hover:text-[#d72638] duration-300 group-active:border-[#000]">
                    ^
                </Link>
            </div>
            <div className="w-full mt-6 mb-4 flex justify-center">
                <hr className="border-b w-[25%] translate-y-[0.6rem]"></hr>
                <h1 className="text-center px-2"> Chance G. 2025 </h1>
                <hr className="border-b w-[25%] translate-y-[0.6rem]"></hr>
            </div>
            <div className="flex w-[100%] md:w-[40%] justify-evenly font-impact mb-4">
                <Link to="skills" smooth={true} duration={500} spy={true} className="cursor-pointer hover:text-[#d72638] hover:scale-105 duration-300 active:text-[#000]">
                    Skills
                </Link>
                <Link to="projects" smooth={true} duration={500} spy={true} className="cursor-pointer hover:text-[#d72638] hover:scale-105 duration-300 active:text-[#000]">
                    Projects
                </Link>
                <Link to="about" smooth={true} duration={500} spy={true} className="cursor-pointer hover:text-[#d72638] hover:scale-105 duration-300 active:text-[#000]">
                    About
                </Link>
            </div>
        </footer>
    )
}