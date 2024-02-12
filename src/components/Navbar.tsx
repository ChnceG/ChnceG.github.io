import React from 'react';
import { Link } from 'react-router-dom';
import gitImage from '../assets/git.png';

export default function Navbar() : JSX.Element {
    return (
        <nav className='h-[80px] flex shadow-slate-900 shadow-lg justify-between items-center px-12 gap-3 mb-12'>
            <img src={gitImage} alt='logo' className='h-12 w-12' />
            <h1 className='text-3xl'>chnceg</h1>
            <div className='grow'></div>
            <h1 className='text-3xl'> <Link to="/">home</Link> </h1>
            <h1 className='text-3xl'> <Link to="/Skills">skills</Link> </h1>
            <h1 className='text-3xl'> <Link to="/Projects">projects</Link> </h1>
            <h1 className='text-3xl'> <Link to="/Contact">contact</Link> </h1>
        </nav>
    );
}