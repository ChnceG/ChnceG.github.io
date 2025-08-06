import ProjectCarousel from "../components/ProjectCarousel";

export default function Projects() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center">
            <h1 className="~lg/sm:~text-5xl/xl text-center underline underline-offset-8 decoration-[#d72638] mb-12">Projects</h1>
            <ProjectCarousel className="w-[80%] lg:w-[60%] mb-24" />
        </section>
    )
}