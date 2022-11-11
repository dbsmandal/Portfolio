import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='bg-gray-50 dark:bg-gray-700  '>
            <nav className='py-3 px-4 mx-auto max-w-screen-xl md:px-6'>
                <div className='flex items-center'>
                    <ul className='flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium'>
                        <li>
                            <Link className='text-gray-900 dark:text-white hover:underline' to="/">Home</Link>
                        </li>
                    </ul>
                    <ul className='flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium'>
                        <li>
                            <Link className='text-gray-900 dark:text-white hover:underline' to="/projects">Projects</Link>
                        </li>
                    </ul>
                    <ul className='flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium'>
                        <li>
                            <Link className='text-gray-900 dark:text-white hover:underline' to="/skills">Skilss</Link>
                        </li>
                    </ul>
                    <ul className='flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium'>
                        <li>
                            <Link className='text-gray-900 dark:text-white hover:underline' to="/contact">Contact</Link>
                        </li>
                    </ul>

                </div>
            </nav>

        </div>
    )
}

export default Navbar
