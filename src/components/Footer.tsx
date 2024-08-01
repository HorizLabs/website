// 'use client'

import Image from "next/image";
import '@/css/components/footer.css'
import Link from "next/link";
import { RiGithubFill, RiLinkedinBoxFill, RiYoutubeFill } from "@remixicon/react";

// This is for the main footer in the main page
export function FooterComponent() {
    return (
        <>
            <footer className="footer_comp bg-slate-100 dark:bg-zinc-800 min-h-[70px] p-5
            flex content-center justify-evenly flex-col md:flex-row gap-5">
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-5">
                        <Image src={'/logo.png'} alt="Logo" width={50} height={50} />
                        <h1 className="text-[2em] font-extrabold">Horizon Labs</h1>
                    </div>
                    <div className="flex justify-center gap-5">
                        <Link href={'https://github.com/horizlabs'}><RiGithubFill size={30} /></Link>
                        <Link href={'https://www.linkedin.com/company/horizlabs'}><RiLinkedinBoxFill size={30} /></Link>
                    </div>
                </div>
                <div className="flex mr-5">
                    <div className="flex flex-col content-center text-start">
                        <p className="font-bold">Home</p>
                        <ul>
                            <li><Link className="hover:underline" href={'/about'}>About</Link></li>
                            <li><Link className="hover:underline" href={'/contact'}>Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </footer>
            <footer className="dark:bg-black flex justify-center gap-3 font-extralight text-[15px] p-1">
                <h1>©{new Date().getFullYear()} Horizon Labs. All Rights Reserved</h1>
                {/* <p>●</p>
                <Link href={'/legal'} className="hover:underline">Legal</Link> */}
            </footer>
        </>
    )
}