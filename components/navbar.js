"use client";
import React, { useState } from "react";
import Link from 'next/link'

export default function RootLayout() {
    const [expandNav, setExpandNav] = useState(false);
    function changeExpandNav() {
        setExpandNav(!expandNav);
    }
    return (
        <nav className="flex items-center justify-between flex-wrap bg-lightest p-3">
        <Link href="/" className="flex items-center sm:px-11 sm:mx-5 flex-shrink-0 text-darkest font-semibold text-2xl tracking-tight">
            kmodi@Portfolio:~$ <span className="animate-blink">▮</span>
        </Link>
        <div className="block lg:hidden">
            <button onClick={changeExpandNav} className="flex items-center px-3 py-2 border rounded text-darkest border-darkest hover:text-light hover:border-light">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
        </div>
        <div id="navbarLinks" className={`${expandNav? "hidden" : "visible"} w-full sm:flex px-10 lg:items-center lg:w-auto`}>
            <div className="text-lg justify-right">
            <Link href="/#research" className="block mt-4 lg:inline-block lg:mt-0 text-darkest hover:text-light mx-5">
                [ research ]
            </Link>
            <Link href="/#projects" className="block mt-4 lg:inline-block lg:mt-0 text-darkest hover:text-light mx-5">
                [ projects ]
            </Link>
            <Link href="https://drive.google.com/file/d/1KE3nlY9cLU0BfhwYiIhw6HB3Alb2SCfR/view?usp=sharing" className="block mt-4 lg:inline-block lg:mt-0 text-darkest hover:text-light mx-5">
                [ resume ]
            </Link>
            {/* <Link href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-darkest hover:text-light mx-5">
                [ blog ]
            </Link> */}
            </div>
        </div>
        </nav>
    )
  }