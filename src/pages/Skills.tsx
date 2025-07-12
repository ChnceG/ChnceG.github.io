import Graph from "../components/SkillsGraph";
import { languageData } from "../util/languageData";
import { softwareData } from "../util/softwareData";
import { frameworksData } from "../util/frameworksData";

export default function Skills() {
    return (
        <section className="min-h-screen flex items-center justify-center">
            <div className="flex flex-col items-center">
                <h1 className="text-5xl text-center underline underline-offset-8 decoration-[#d72638] mb-16">Skills</h1>
                <div className="flex gap-8">
                    <div className="bg-[#eee]/5 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                        <Graph title="Languages" data={languageData} />
                    </div>
                    <div className="bg-[#eee]/5 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                        <Graph title="Notable Tools" data={softwareData} />
                    </div>
                    <div className="bg-[#eee]/5 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                        <Graph title="Frameworks" data={frameworksData} />
                    </div>
                </div>
            </div>
        </section>
    )
}