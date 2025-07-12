import { useState, useEffect } from "react"
import { Link } from "react-scroll"
import gitIcon from "../assets/socialLinks/git.png"
import emailIcon from "../assets/socialLinks/emailicon.png"
import cntower from "../assets/selfImg/cntower.jpg"
import downtownmtl from "../assets/selfImg/downtownmtl.jpg"
import montroyal from "../assets/selfImg/montroyal.jpg"
import mtlsign from "../assets/selfImg/mtlsign.jpg"
import porthope from "../assets/selfImg/porthope.jpg"

export default function Home() {
    // const images = [cntower, downtownmtl, montroyal, mtlsign, porthope];
    const images = [
        { src: cntower, label: "CN Tower, Toronto" },
        { src: downtownmtl, label: "Downtown, Montreal" }, 
        { src: montroyal, label: "Mont Royal, Montreal" },
        { src: mtlsign, label: "Old Port, Montreal" },
        { src: porthope, label: "Port Hope"}
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(false);

    useEffect(() => {
    //     const preloadImages = () => {
    //         images.forEach((image) => {
    //             new Image().src = image;
    //         });
    //     };

        // preloadImages();

        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
                setFade(true);
            }, 500);
        }, 3000);

        return () => clearInterval(interval);
    })


    return (
        <section className="min-h-screen flex flex-col">
            <div className="flex-grow flex items-center justify-evenly">
                <div className="flex flex-col text-center">
                    <section className="bg-[#eee]/5 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                        <h1 className="text-9xl mr-32 mb-4 decoration-[#d72638] underline underline-offset-[16px]">Chance</h1>
                        <h1 className="text-9xl ml-32 mb-8 decoration-[#d72638] underline underline-offset-[16px]">Grandy</h1>
                        <div className="flex flex-col h-[50px] mx-auto mb-3  font-inter">
                            <a href="https://www.github.com/chnceg" target="_blank" className="flex gap-2 self-center text-2xl font-bold hover:text-[#d72638] hover:scale-105 duration-300 active:text-[#000]">
                                <img src={gitIcon} alt='Github Icon' className="w-[25px] h-[25px] self-center"/>
                                chnceg
                            </a>
                            <a href="mailto:cbgrandy@gmail.com" target="_blank" className="flex self-center items-center text-xl font-bold hover:text-[#d72638] hover:scale-105 duration-300 active:text-[#000]">
                                <img src={emailIcon} alt="Email Icon" className="w-6 h-6 mr-2" />
                                cbgrandy@gmail.com
                            </a>
                        </div>
                        <p className="text-lg">
                            Full-stack dev | Recent Graduate | Constantly learning
                        </p>
                        <p className="text-lg italic my-2 text-zinc-400">
                            I just want to make cool stuff.
                        </p>
                    </section>
                </div>
                <div className="w-[350px] h-[450px] overflow-hidden relative rounded-xl border-8 border-[#d72638] bg-[#111]">
                    <img
                        src={images[currentIndex].src}
                        alt="Profile Picture"
                        className={`w-full h-full object-cover object-center overflow-hidden transition-opacity duration-700 ${fade ? "opacity-100" : "opacity-0"}`}
                    />
                    <div className="absolute bottom-2 left-2 bg-[#111]/30 px-3 py-1 text-sm font-inter rounded-md backdrop-blur-md">
                        {images[currentIndex].label}
                    </div>
                </div>
            </div>
            <div className="w-full h-[20%] flex justify-evenly py-6 gap-12 underline underline-offset-8 decoration-[#d72638] font-impact text-4xl">
                <Link
                    to="skills"
                    smooth={true}
                    duration={500}
                    className="hover:scale-105 hover:text-[#d72638] duration-300 cursor-pointer active:text-[#000]"
                >
                    Skills
                </Link>
                <Link
                    to="projects"
                    smooth={true}
                    duration={500}
                    className="hover:scale-105 hover:text-[#d72638] duration-300 cursor-pointer active:text-[#000]"
                >
                    Projects
                </Link>
                <Link
                    to="about"
                    smooth={true}
                    duration={500}
                    className="hover:scale-105 hover:text-[#d72638] duration-300 cursor-pointer active:text-[#000]"
                >
                    About
                </Link>
                <Link
                    to="contact"
                    smooth={true}
                    duration={500}
                    className="hover:scale-105 hover:text-[#d72638] duration-300 cursor-pointer active:text-[#000]"
                >
                    Contact
                </Link>
            </div>
        </section>
    )
}