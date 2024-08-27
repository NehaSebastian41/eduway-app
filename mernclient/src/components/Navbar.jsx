import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// react icons
import { FaBarsStaggered, FaBook, FaPhone, FaXmark } from "react-icons/fa6"; // Ensure these icons are correctly imported
import { AuthContext } from '../context/AuthProvider';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const {user}=useContext(AuthContext);
    console.log(user)


    // Toggle menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Nav items
    const navItems = [
        { link: "Home", path: "/" },
        { link: "About", path: "/about" },
        { link: "Contact", path: "/contact" },
        { link: "Create Your Group", path: "/admin/dashboard/" },
        { link: "Groups", path: "/shop" },
        { link: "Login", path: "/login" } 
      
    ];

    return (
        <header className={`w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300 ${isSticky ? "bg-blue-300" : ""}`}>
            <nav className='py-4 lg:px-24 flex justify-between items-center'>
                {/* logo */}
                <Link to="/" className='text-2xl font-bold text-blue-700 flex items-center gap-2'>
                    <FaBook className='inline-block' /> EduWay
                </Link>

                {/* nav-items for large devices */}
                <ul className='hidden md:flex space-x-12'>
                    {navItems.map(({ link, path }) => (
                        <li key={path}>
                            <Link to={path} className='text-base text-black uppercase cursor-pointer hover:text-blue-700'>
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Menu button for mobile devices */}
                <div className='md:hidden'>
                    <button onClick={toggleMenu} className='text-black focus:outline-none'>
                        {isMenuOpen ? <FaXmark className='h-5 w-5 text-black' /> : <FaBarsStaggered className='h-5 w-5 text-black' />}
                    </button>
                </div>
            </nav>

            {/* nav items for small devices */}
            {isMenuOpen && (
                <div className='absolute top-full left-0 right-0 bg-blue-700 z-10'>
                    <ul className='flex flex-col items-center py-4 space-y-4'>
                        {navItems.map(({ link, path }) => (
                            <li key={path}>
                                <Link to={path} className='text-base text-white uppercase cursor-pointer hover:text-blue-300'>
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Navbar;

