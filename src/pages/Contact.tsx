import emailIcon from '../assets/socialLinks/emailicon.png'
import linkedIcon from '../assets/socialLinks/linked.png'
import gitIcon from '../assets/socialLinks/git.png'

export default function Contact() {
    return (
        <section className="my-16 px-6">
            <div className="max-w-xl mx-auto bg-[#eee]/5 backdrop-blur-sm px-10 py-10 rounded-xl text-center space-y-10">
                <h2 className="~lg/sm:~text-4xl/xl  underline underline-offset-[12px] decoration-[#d72638]">
                    Connect with me
                </h2>
                <p className="~lg/sm:~text-lg/sm text-zinc-400 leading-relaxed">
                    Feel free to reach out regarding any opportunities! <br /> Email is the easiest way to reach me, however it may take a day or 2 for a response.
                </p>
                <div className="~lg/sm:~text-xl/base flex flex-col gap-8">
                    <a href="mailto:cbgrandy@gmail.com" className="w-fit flex gap-6 group hover:scale-105 duration-300">
                        <img src={emailIcon} alt="Email Icon" className="~lg/sm:~w-10/6" />
                        <p className="my-auto group-hover:text-[#d72638] group-active:text-[#000]">cbgrandy@gmail.com</p>
                    </a>
                    <a href="https://www.linkedin.com/in/chnceg/" target="_blank" rel="noreferrer" className="w-fit flex gap-6 group hover:scale-105 duration-300">
                        <img src={linkedIcon} alt='LinkedIn Icon' className="~lg/sm:~w-10/6" />
                        <p className="my-auto group-hover:text-[#d72638] group-active:text-[#000]">chnceg</p>
                    </a>
                    <a href="https://www.github.com/chnceg" target="_blank" rel="noreferrer" className="w-fit flex gap-6 group hover:scale-105 duration-300">
                        <img src={gitIcon} alt='GitHub Icon' className="~lg/sm:~w-10/6" />
                        <p className="my-auto group-hover:text-[#d72638] group-active:text-[#000]">chnceg</p>
                    </a>
                </div>
            </div>
        </section>
    )
}