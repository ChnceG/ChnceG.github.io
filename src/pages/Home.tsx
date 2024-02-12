import InfoBox from '../components/InfoBox'
import Button from '../components/Button'
import SocialIcons from '../components/SocialIcons'
import Email from '../components/Email'
import harleyImage from '../assets/harley_full.jpg'

export default function Home() {
    return (
        <div>
            <div className='flex justify-evenly mt-10'>
                <SocialIcons className='m-3' />
                <InfoBox className='h-[400px] self-center'>
                <div className='p-5 w-[500px]'>
                    <p className='text-2xl mb-2'>Hey, my names Chance</p>
                    <p className='text-2xl mb-2'>I'm a student at NSCC ECampus and an <i><b>aspiring developer</b></i></p>
                    <p className='text-2xl mb-2'>I'm looking for <i><b>job opportunities</b></i> to make cool stuff and further my career</p>
                    <div className='flex justify-center'>
                    <Button className='m-3'>
                        Contact Me
                    </Button>
                    </div>
                    
                    <p className='text-xl mb-2'>... and yes, that is my dog. His name is Harley</p>
                </div>
                </InfoBox>
                <InfoBox className='w-[400px]'>
                <img src={harleyImage} alt="Harley the dog" />
                </InfoBox>
                <Email email="cbgrandy@gmail.com" />
            </div>
        </div>
    )
}
