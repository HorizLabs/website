// 'use client'

import Image from "next/image";
import '@/css/components/footer.css'
import Link from "next/link";

// This is for the main footer in the main page
export function FooterComponent() {
    return (
        <>
            <footer className="footer_comp bg-zinc-800 min-h-[70px] p-5
            flex content-center justify-evenly flex-col md:flex-row gap-5">
                <div className="flex items-center gap-5">
                    <Image src={'/logo.png'} alt="Logo" width={50} height={50} />
                    <h1 className="text-[2em] font-extrabold">Horizon Labs</h1>
                </div>
                <div className="flex mr-5">
                    <div className="flex flex-col content-center text-center">
                        <p className="font-bold">Links</p>
                        <ul>
                            <li><Link className="hover:underline" href={'/about'}>About</Link></li>
                        </ul>
                    </div>
                </div>
            </footer>
            <footer className="bg-black flex justify-center gap-3 font-extralight">
                <h1>©{new Date().getFullYear()} Horizon Labs</h1>
                {/* <p>●</p>
                <Link href={'/legal'} className="hover:underline">Legal</Link> */}
            </footer>
        </>
    )
}