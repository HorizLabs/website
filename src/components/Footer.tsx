// 'use client'

import Image from "next/image";
import '@/css/components/footer.css'

// This is for the main footer in the main page
export function FooterComponent() {
    return (
        <footer className="footer_comp bg-zinc-800 min-h-[70px] p-5 flex content-center justify-evenly sm:flex-col md:flex-row">
            <div className="flex items-center gap-5">
                <Image src={'/logo.png'} alt="Logo" width={50} height={50} />
                <h1 className="text-[2em] font-extrabold">Horizon Labs</h1>
            </div>
            <div className="flex mr-5">
                <div className="flex flex-col content-center text-center">
                    <p>Links</p>
                    <ul>
                        <li>Roblox</li>
                        <li>Roblox</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}