import github from "../assets/git.png";
import emailIcon from "../assets/emailicon.png";

export default function Footer() : JSX.Element {
    return (
        <footer className="flex flex-col bottom-0 w-full p-4">
            <div className="mx-[100px] border-b-2 border-bold-red leading-[0] text-center text-xl mb-5">
                <span className="p-3">Get in Contact</span>
            </div>
            <div className="flex justify-center gap-4">
                <a href="mailto:cbgrandy@gmail.com" target="_blank" className="hover:scale-105 duration-300 underline flex">
                    <img src={emailIcon} alt="Email Icon" className="w-6 h-6 mr-2" />
                    cbgrandy@gmail.com
                </a>
                <a href="https://github.com/chnceg" target="_blank" className="hover:scale-105 duration-300 underline flex">
                    <img src={github} alt="GitHub Icon" className="w-6 h-6 mr-2" />
                    github.com
                </a>
            </div>
        </footer>
    )
}