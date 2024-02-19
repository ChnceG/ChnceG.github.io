import InfoBox from "../components/InfoBox";
import SkillsGraph from "../components/SkillsGraph";
import { languageData } from "../util/LanguageData";
import { softwareData } from "../util/SoftwareData";

export default function Skills() {
    return (
        <div>
            <div className="flex flex-col justify-center items-center gap-3">
                <h1 className="text-5xl font-impact text-bold-red">Skills</h1>
                <div className="flex gap-16">
                    <InfoBox>
                        <SkillsGraph title="Languages & Frameworks" skillsData={languageData} />
                    </InfoBox>
                    <InfoBox>
                        <SkillsGraph title="Notable Tools" skillsData={softwareData} />
                    </InfoBox>
                </div>
            </div>
        </div>
    )
}