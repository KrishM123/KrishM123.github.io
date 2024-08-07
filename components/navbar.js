"use client";
import React, { useState } from "react";
import Link from 'next/link'

export default function NavBar({ darkMode, toggleDarkMode }) {
    const [expandNav, setExpandNav] = useState(false);
    function changeExpandNav() {
        setExpandNav(!expandNav);
    }
    return (
        <nav className={`flex items-center justify-between flex-wrap ${darkMode ? 'bg-darkest text-white' : 'bg-lightest text-darkest'} p-3 transition-colors duration-300`}>
            <Link href="/" className={`flex items-center sm:px-11 sm:mx-5 flex-shrink-0 font-semibold text-2xl tracking-tight ${darkMode ? 'text-white' : 'text-darkest'}`}>
                kmodi@Portfolio:~$ <span className="animate-blink">▮</span>
            </Link>
            <div className="block lg:hidden">
                <button onClick={changeExpandNav} className={`flex items-center px-3 py-2 border rounded ${darkMode ? 'text-white border-white hover:text-gray-300 hover:border-gray-300' : 'text-darkest border-darkest hover:text-light hover:border-light'}`}>
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div id="navbarLinks" className={`${expandNav? "hidden" : "visible"} w-full sm:flex px-10 lg:items-center lg:w-auto`}>
                <div className="text-lg justify-right">
                    <Link href="/#research" className={`block mt-4 lg:inline-block lg:mt-0 ${darkMode ? 'text-white hover:text-gray-300' : 'text-darkest hover:text-light'} mx-5`}>
                        [ research ]
                    </Link>
                    <Link href="/#projects" className={`block mt-4 lg:inline-block lg:mt-0 ${darkMode ? 'text-white hover:text-gray-300' : 'text-darkest hover:text-light'} mx-5`}>
                        [ projects ]
                    </Link>
                    <Link href="https://drive.google.com/file/d/1kE9BLv6GWTIGxWWH4V8nFmHc4zO6x0bG/view?usp=sharing" className={`block mt-4 lg:inline-block lg:mt-0 ${darkMode ? 'text-white hover:text-gray-300' : 'text-darkest hover:text-light'} mx-5`}>
                        [ resume ]
                    </Link>
                    <button
                        onClick={toggleDarkMode}
                        className={`mt-4 lg:mt-0 p-2 rounded-full ${darkMode ? 'bg-white text-darkest' : 'bg-darkest text-white'} mx-5`}
                    >
                        {darkMode ? '🌞' : '🌙'}
                    </button>
                </div>
            </div>
        </nav>
    )
}