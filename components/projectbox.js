"use client";
import Link from 'next/link'
import Image from 'next/image'

export default function RootLayout({ image, link, title }) {
    return (
        <Link href={link}>
            <div className={"flex flex-grow bg-darkest hover:bg-dark p-[5px] rounded-xl"}>
            <Image
                src={image}
                width="300"
                height="300"
                layout="responsive"
                alt={link}
                className={"rounded-xl"}
                />
            </div>
            <div className={"flex flex-grow justify-center font-sans font-bold color-darkest"}>
                {title}
            </div>
        </Link>
    )
}