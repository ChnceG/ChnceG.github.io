import { NavLink } from 'react-router-dom';
import gitImage from '../assets/git.png';

export default function Navbar() : JSX.Element {
    return (
        <nav className='h-[80px] flex shadow-slate-900 shadow-lg justify-between items-center px-12 gap-3 mb-12'>
            <img src={gitImage} alt='logo' className='h-12 w-12' />
            <h1 className='text-3xl'>chnceg</h1>
            <div className='grow'></div>
            <h1 className='text-3xl hover:text-bold-red hover:scale-105 duration-300'> <NavLink to="/">home</NavLink> </h1>
            <h1 className='text-3xl hover:text-bold-red hover:scale-105 duration-300'> <NavLink to="/Skills">skills</NavLink> </h1>
            <h1 className='text-3xl hover:text-bold-red hover:scale-105 duration-300'> <NavLink to="/Projects">projects</NavLink> </h1>
            <h1 className='text-3xl hover:text-bold-red hover:scale-105 duration-300'> <NavLink to="/Contact">contact</NavLink> </h1>
        </nav>
    );
}