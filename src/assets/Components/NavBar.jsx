import { useState } from 'react';
import './NavBar.css';
import { IoSearchSharp } from "react-icons/io5";
import { GoBellFill } from "react-icons/go";
import { FaEnvelopeCircleCheck, FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

let NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='nav'>
            <div className='logo'>
                <img src='logo2.png' alt='Logo' />
            </div>
            <div className={`links ${isMenuOpen ? 'open' : ''}`}>
                <ul>
                    <li><a href='#'>Find Work</a></li>
                    <li><a href='#'>Learn Design</a></li>
                    <li><a href='#'>Marketplace</a></li>
                    <li><a href='#'>Hire Designers</a></li>
                </ul>
            </div>
            <div className='searchBar'>
                <div className='Bar'>
                    <input type="text" />
                    <IoSearchSharp className='searchIcon' />
                </div>
            </div>
            <div className='otherIcons'>
                <GoBellFill />
                <FaEnvelopeCircleCheck />
                <div className='userIcon'>
                    <img src="https://img.freepik.com/premium-photo/default-male-user-icon-blank-profile-image-green-background-profile-picture-icon_962764-98397.jpg" alt='User' />
                </div>
                {isMenuOpen ? <FaTimes className='hamburger' onClick={toggleMenu} /> : <FaBars className='hamburger' onClick={toggleMenu} />}
            </div>
        </div>
    );
}

export default NavBar;
