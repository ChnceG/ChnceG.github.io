import InfoBox from "../components/InfoBox"
import Button from "../components/Button"
import harleyImage from "../assets/harley_full.jpg"

export default function Home() {
    return (
        <div>
            <div className="flex justify-evenly mt-10">
                <InfoBox className="h-[400px] self-center">
                <div className="p-5 w-[500px] bg-background-darkblue">
                    <p className="text-2xl mb-2">Hey, my names Chance</p>
                    <p className="text-2xl mb-2">I'm a student at NSCC ECampus and an <i><b>aspiring developer</b></i></p>
                    <p className="text-2xl mb-2">I'm looking for <i><b>job opportunities</b></i> to make cool stuff and further my career</p>
                    <div className="flex justify-center bg-background-darkblue">
                        <Button className="m-3">
                            Contact Me
                        </Button>
                    </div>
                    <p className="text-xl mb-2">... and yes, that is my dog. His name is Harley</p>
                </div>
                </InfoBox>
                <InfoBox className="w-[400px]">
                <img src={harleyImage} alt="Harley the dog"/>
                </InfoBox>
            </div>
            <div className="flex justify-evenly mt-10">
                <InfoBox className="w-[65%] p-3 mb-3">
                    <div>
                        <h1 className="text-2xl bg-background-darkblue"> About me </h1>
                        <p className="text-xl">
                            I was born in Newfoundland, and have been living in Nova Scotia for my entire life. I also have way too many pets (like 7, help). My goal is to make cool stuff and be proud of the work I do.
                            I don't particularly prefer front-end or back-end, I'm interested in both and learn what I can. 
                        </p>
                    </div>
                </InfoBox>
            </div>
        </div>
    )
}
