import cntower from "../assets/selfImg/cntower.jpg"
import downtownmtl from "../assets/selfImg/downtownmtl.jpg"
import mtlsign from "../assets/selfImg/mtlsign.jpg"
import porthope from "../assets/selfImg/porthope.jpg"

export default function About() {
    return (
        <section className="h-screen flex flex-col justify-center items-center">
            <h1 className="text-5xl text-center underline underline-offset-8 decoration-[#d72638] mb-16">About me</h1>
            <div className="flex items-center justify-evenly w-full">
                <div className="max-w-xl bg-[#eee]/5 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                    <h1 className="text-2xl mb-4 underline underline-offset-[12px] decoration-[#d72638]">Work</h1>
                    <p className="text-lg mb-4 text-zinc-400 leading-relaxed">
                        I'm Chance, a recently graduated full-stack developer from Nova Scotia with a focus on making cool things and learning.
                        Whether it's making creative UIs or diving in on the backend, I enjoy building things that work well and look good.
                    </p>
                    <h1 className="text-2xl mb-4 underline underline-offset-[12px] decoration-[#d72638]">Hobbies</h1>
                    <p className="text-lg text-zinc-400 leading-relaxed">
                        Outside of coding, I'm into gaming, newly into rock climbing, and traveling.
                        I played competitive Counter-Strike, and have played in a few tournaments across Canada and earned a bit of prize money. The feeling of competing in person is unmatched and feels like a multiple day adrenaline dump.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                        { src: cntower, label: "Placeholder" },
                        { src: mtlsign, label: "Placeholder" },
                        { src: downtownmtl, label: "Placeholder" },
                        { src: porthope, label: "Placeholder" },
                    ].map(({ src, label }, id) => (
                        <div key={id} className="relative group overflow-hidden rounded-xl border-2 border-[#222] hover:border-[#d72638]">
                            <img
                                src={src}
                                alt={label}
                                className="w-full h-64 object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 duration-500"
                                />
                            <div className="absolute bottom-2 left-2 bg-[#111]/30 px-3 py-1 text-sm font-inter rounded-md backdrop-blur-md">
                                {label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}