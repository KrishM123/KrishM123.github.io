"use client";
import Link from 'next/link'
import Image from 'next/image'

export default function RootLayout({ image, link }) {
    return (
        <Link href={link} className={"mx-3"}>
          <Image
            src={image}
            width={40}
            height={40}
            alt={link}
          />
        </Link>
    )
}