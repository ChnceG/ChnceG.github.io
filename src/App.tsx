import Navbar from './components/Navbar'
import InfoBox from './components/InfoBox'
import harleyImage from './assets/harley_full.jpg'

export default function App() {
  return (
    <div>
      <Navbar />
      <div className='flex justify-evenly mt-10'>
        <InfoBox className='h-[400px] self-center'>
          <div className='p-5 w-[500px]'>
            <p className='text-2xl mb-2'>Hey, my names Chance</p>
            <p className='text-2xl mb-2'>I'm a student at NSCC ECampus and an <i><b>aspiring developer</b></i></p>
            <p className='text-2xl mb-2'>I'm looking for <i><b>job opportunities</b></i> to make cool stuff and further my career</p>
            <h1>BUTTON GOES HERE</h1>
            <p className='text-xl mb-2'>... and yes, that is my dog. His name is Harley</p>
          </div>
        </InfoBox>
        <InfoBox className='w-[400px]'>
          <img src={harleyImage} alt="Harley the dog" />
        </InfoBox>
      </div>
    </div>
  )
}
