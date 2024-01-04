"use client";
import React, { useState } from "react";
import Link from 'next/link'

export default function RootLayout() {
    const [expandNav, setExpandNav] = useState(false);
    function changeExpandNav() {
        setExpandNav(!expandNav);
    }
    return (
        <nav class="flex items-center justify-between flex-wrap bg-lightest p-3">
        <Link href="/" className="flex items-center px-11 mx-5 flex-shrink-0 text-darkest font-semibold text-2xl tracking-tight">
            kmodi@Portfolio:~$ <span className="animate-blink">▮</span>
        </Link>
        <div class="block lg:hidden">
            <button onClick={changeExpandNav} class="flex items-center px-3 py-2 border rounded text-darkest border-darkest hover:text-light hover:border-light">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
        </div>
        <div id="navbarLinks" className={`${expandNav? "hidden" : "visible"} w-full sm:flex px-10 lg:items-center lg:w-auto`}>
            <div class="text-lg justify-right">
            <Link href="/projects" class="block mt-4 lg:inline-block lg:mt-0 text-darkest hover:text-light mx-5">
                [ projects ]
            </Link>
            <Link href="https://drive.google.com/file/d/17mhrgcbRojauSOBY1QIMu6rNhHEA5SO4/view?usp=sharing" class="block mt-4 lg:inline-block lg:mt-0 text-darkest hover:text-light mx-5">
                [ resume ]
            </Link>
            <Link href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-darkest hover:text-light mx-5">
                [ blog ]
            </Link>
            </div>
        </div>
        </nav>
    )
  }