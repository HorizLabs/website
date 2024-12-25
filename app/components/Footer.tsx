import { SiDiscord, SiInstagram, SiLinkedin } from "@icons-pack/react-simple-icons";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
    return (
        <div className="bg-inherit">
            <footer className="flex flex-col gap-5 p-14 min-h-[35vh] justify-center items-center h-16 rounded-t-md dark:bg-zinc-800 bg-zinc-300">
                <div className="flex flex-col gap-4">
                    {/* Links */}
                    <div className="flex flex-row gap-10">
                        <ul className="flex flex-col gap-2 justify-center items-center text-[110%]">
                            <li className="text-xs font-semibold text-gray-700 dark:text-gray-300 text-[18.5px]">Company</li>
                            <li className="text-xs text-gray-500 dark:text-gray-400 text-[15px]  hover:underline"><Link href={'/about'} className="flex flex-row gap-1 items-center">About</Link></li>
                            <li className="text-xs text-gray-500 dark:text-gray-400 text-[15px]  hover:underline">Legal</li>
                        </ul>
                        <ul className="flex flex-col gap-2 items-center text-[110%]">
                            <li className="text-xs font-semibold text-gray-700 dark:text-gray-300 text-[18.5px]">Initiatives</li>
                            <li className="text-xs text-gray-500 dark:text-gray-400 text-[15px]  hover:underline"><Link href={'https://irpo.net'} className="flex flex-row gap-1 items-center"><ExternalLink size={17} /> IRPO</Link></li>
                        </ul>
                    </div>
                    {/* Socials */}
                    <div className="flex flex-col gap-4 justify-center items-center">
                        <Image src="/Logo.png" alt="Logo" width={75} height={75} />
                        <div className="flex flex-row gap-4">
                            <Link href={'https://instagram.com/labshorizon'} className="text-gray-500 hover:text-white transition-colors duration-200">
                                <SiInstagram />
                            </Link>
                            <Link href={'https://discord.gg/HwxqRShWc9'} className="text-gray-500 hover:text-white transition-colors duration-200">
                                <SiDiscord />
                            </Link>
                            <Link href={'https://www.linkedin.com/company/horizlabs'} className="text-gray-500 hover:text-white transition-colors duration-200">
                                <SiLinkedin />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                        <p className="text-xs text-gray-500 dark:text-gray-400 text-[14px]
                        ">©{new Date().getFullYear()} Horizon Labs, Inc. All rights reserved.</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 text-[14px]
                        ">EIN: 33-1547684</p>
                </div>
            </footer>
        </div>
    )
}