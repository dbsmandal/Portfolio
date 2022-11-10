import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className='flex'>
                <ul className=''>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/skills">Skilss</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/contact">Conatct</Link>
                    </li>
                </ul>


            </nav>

        </div>
    )
}

export default Navbar
