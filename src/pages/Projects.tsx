import ProjectCarousel from "../components/ProjectCarousel";

export default function Projects() {
    return (
        <section className="h-screen flex flex-col justify-center items-center">
            <h1 className="text-5xl text-center underline underline-offset-8 decoration-[#d72638] mb-12">Projects</h1>
            <ProjectCarousel className="w-[60%] mb-12" />
        </section>
    )
}