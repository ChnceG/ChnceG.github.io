import emailIcon from '../assets/socialLinks/emailicon.png'
import linkedIcon from '../assets/socialLinks/linked.png'
import gitIcon from '../assets/socialLinks/git.png'

export default function Contact() {
    return (
        <section className="py-24 px-6">
            <div className="max-w-xl mx-auto bg-[#eee]/5 backdrop-blur-sm px-10 py-10 rounded-xl text-center space-y-10">
                <h2 className="text-4xl underline underline-offset-[12px] decoration-[#d72638]">
                    Connect with me
                </h2>
                <p className="text-lg text-zinc-400 leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit <br /> Lorem ipsum dolor sit amet consectetur adipiscing elit <br /> Lorem ipsum dolor sit amet consectetur adipiscing elit
                </p>
                <div className="flex flex-col gap-8 text-xl">
                    <a href="mailto:cbgrandy@gmail.com" className="w-fit flex gap-6 group hover:scale-105 duration-300">
                        <img src={emailIcon} alt="Email Icon" className="w-10 h-10" />
                        <p className="my-auto group-hover:text-[#d72638] group-active:text-[#000]">cbgrandy@gmail.com</p>
                    </a>
                    <a href="https://www.linkedin.com/in/chnceg/" target="_blank" rel="noreferrer" className="w-fit flex gap-6 group hover:scale-105 duration-300">
                        <img src={linkedIcon} alt='LinkedIn Icon' className="w-10 h-10" />
                        <p className="my-auto group-hover:text-[#d72638] group-active:text-[#000]">chnceg</p>
                    </a>
                    <a href="https://www.github.com/chnceg" target="_blank" rel="noreferrer" className="w-fit flex gap-6 group hover:scale-105 duration-300">
                        <img src={gitIcon} alt='GitHub Icon' className="w-10 h-10" />
                        <p className="my-auto group-hover:text-[#d72638] group-active:text-[#000]">chnceg</p>
                    </a>
                </div>
            </div>
        </section>
    )
}