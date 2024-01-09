"use client";
import Link from 'next/link'
import Image from 'next/image'

export default function RootLayout({ image, link, title, description }) {
    return (
        <Link href={link}>
            <Image
                src={image}
                width="300"
                height="300"
                layout="responsive"
                alt={link}
                className={"rounded-xl shadow-lg hover:shadow-2xl"}
                />
            <div className={"flex flex-grow justify-center font-sans text-sm font-bold color-darkest text-center"}>
                {title}
            </div>
            <div className={"flex flex-grow justify-center font-sans text-sm italic color-darkest text-center"}>
                {description}
            </div>
        </Link>
    )
}