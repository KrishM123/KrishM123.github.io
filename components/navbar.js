"use client";
import React, { useState } from "react";
import Link from 'next/link'

export default function RootLayout() {
    const [expandNav, setExpandNav] = useState(true);
    function changeExpandNav() {
        setExpandNav(!expandNav);
    }
    return (
        <nav class="flex items-center justify-between flex-wrap bg-darkest p-3">
        <Link href="/" className="flex items-center flex-shrink-0 text-lightest font-semibold text-xl tracking-tight">
            Krish Modi
        </Link>
        <div class="block lg:hidden">
            <button onClick={changeExpandNav} class="flex items-center px-3 py-2 border rounded text-lightest border-lightest hover:text-light hover:border-light">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
        </div>
        <div id="navbarLinks" className={`${expandNav? "visible" : "hidden"} w-full sm:flex lg:items-center lg:w-auto`}>
            <div class="text-lg justify-right">
            <Link href="../app/projects" class="block mt-4 lg:inline-block lg:mt-0 text-lightest hover:text-light mx-5">
                Projects
            </Link>
            <Link href="https://drive.google.com/file/d/1SweunV1re7QBYPtHxQ1wn4cyfuD5Eswu/view?usp=sharing" class="block mt-4 lg:inline-block lg:mt-0 text-lightest hover:text-light mx-5">
                Resume
            </Link>
            <Link href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-lightest hover:text-light mx-5">
                Blog
            </Link>
            </div>
        </div>
        </nav>
    )
  }