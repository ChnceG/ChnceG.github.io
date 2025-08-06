import climb from "../assets/selfImg/climb.jpg"
import austin from "../assets/selfImg/austin.jpg"
import gamer from "../assets/selfImg/gamer.jpg"
import levi from "../assets/selfImg/levi.jpg"

export default function About() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center">
            <h1 className="~lg/sm:~text-5xl/xl text-center underline underline-offset-8 decoration-[#d72638] mb-16">About me</h1>
            <div className="flex items-center flex-col lg:flex-row gap-4 lg:gap-0 justify-evenly w-full mx-auto">
                <div className="max-w-xl bg-[#eee]/5 backdrop-blur-sm p-6 rounded-xl shadow-lg mx-4 lg:mx-0">
                    <h1 className="~lg/sm:~text-2xl/base mb-4 underline underline-offset-[12px] decoration-[#d72638]">Work</h1>
                    <p className="~lg/sm:~text-lg/sm mb-4 text-zinc-400 leading-relaxed">
                        I'm Chance, a recently graduated full-stack developer from Nova Scotia with a focus on making cool things and learning.
                        Whether it's making creative UIs or diving in on the backend, I enjoy building things that work well and look good.
                    </p>
                    <h1 className="~lg/sm:~text-2xl/base mb-4 underline underline-offset-[12px] decoration-[#d72638]">Hobbies</h1>
                    <p className="~lg/sm:~text-lg/sm text-zinc-400 leading-relaxed">
                        Outside of coding, I'm into gaming, newly into rock climbing, and traveling.
                        I played competitive Counter-Strike, and have played in a few tournaments across Canada and earned a bit of prize money. The feeling of competing in person is unmatched and feels like a multiple day adrenaline dump.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-24">
                    {[
                        { src: climb, label: "Climbing" },
                        { src: gamer, label: "Competing" },
                        { src: austin, label: "Austin, TX" },
                        { src: levi, label: "My dog Levi" },
                    ].map(({ src, label }, id) => (
                        <div key={id} className="w-[50%] sm:w-[100%] mx-auto relative group overflow-hidden rounded-xl border-2 border-[#d72638]">
                            <img
                                src={src}
                                alt={label}
                                className="sm:w-[100%] sm:h-64 sm:object-cover group-hover:scale-105 duration-500"
                                />
                            <div className="invisible sm:visible absolute bottom-2 left-2 bg-[#111]/30 px-3 py-1 text-sm font-inter rounded-md backdrop-blur-md">
                                {label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}