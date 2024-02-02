import gitImage from '../assets/git.png';

export default function Navbar(): JSX.Element {
    return (
        <nav className='mb-3 text-2xl flex shadow-slate-900 shadow-lg justify-between'>
            <div className='ml-12 flex'>
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