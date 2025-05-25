import React, { useState } from 'react';
import './wmenu.css';
export const WMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        // <div>Menu</div>
        <nav className='navbar'>
            <div className='navbar-container'>
                <div className='logo'>Employee Tracker</div>
                <ul className='menu desktop-menu'>
                    <li className='menu-item'>Home</li>

                    <li className='menu-item submenu-parent'>
                        <span>About</span>

                        {/* Submenu */}
                        <ul className='submenu'>
                            <li className='submenu-item'>Apple</li>
                            <li className='submenu-item'>Banana</li>
                            <li className='submenu-item'>Mango</li>
                        </ul>
                    </li>

                    <li className='menu-item'>Contact</li>
                </ul>
            </div>
        </nav>
    );
};
