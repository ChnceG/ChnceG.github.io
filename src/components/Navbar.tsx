import gitImage from '../assets/git.png';

export default function Navbar(): JSX.Element {
    return (
        <nav className='ml-12 mb-3 text-2xl flex shadow-lg justify-between'>
            <div className='flex'>
                <img src={gitImage} alt='logo' className='h-12 w-12 m-3' />
                <h1 className='text-3xl m-3'>chnceg</h1>
            </div>
            <div className='flex mr-12'>
                <h1 className='text-3xl m-3'>home</h1>
                <h1 className='text-3xl m-3'>skills</h1>
                <h1 className='text-3xl m-3'>projects</h1>
                <h1 className='text-3xl m-3'>contact</h1>
            </div>
        </nav>
    );
}