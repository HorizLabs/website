'use client';

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ExternalLink, MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Navbar() {
    return (
        <div className="flex justify-center items-center pt-5">
            <nav className="dark:bg-zinc-800 bg-zinc-100 w-[90%] min-h-[6.5vh] flex pl-5 items-center gap-7 rounded-md shadow-md justify-between pr-5">
                <Link href={'/'} className="flex flex-row items-center">
                    <Image src="/Logo.png" alt="logo" width={50} height={50} />
                </Link>
                {/* Make menu in tialwind */}
                <Menu as="div" className="relative">
                    <MenuButton>
                        <MenuIcon size={30} />
                    </MenuButton>
                    <MenuItems
                        transition
                        as="div"
                        className="transition duration-100 ease-out data-[closed]:scale-95 data-[closed]:opacity-0 absolute right-0 top-10 bg-zinc-200 dark:bg-zinc-700 rounded-md shadow-lg w-[50vw] md:w-[35vw] lg:w-[25vw] p-8 z-10 flex flex-col gap-3"
                    >
                        <MenuItem as="div">
                            <Link href={'/'}>Home</Link>
                        </MenuItem>
                        <MenuItem as="div">
                            <Link href={'/about'}>About</Link>
                        </MenuItem>
                        <MenuItem as="div">
                            <Link href={'https://irpo.net'} className="flex flex-row gap-2 items-center"><ExternalLink size={19.5} /> IRPO</Link>
                        </MenuItem>
                        <div className="my-1 h-px bg-white/5" />
                        <MenuItem as="div" className={'flex flex-row gap-2 items-center justify-center'}>
                            <Link href={'https://irpo.net'} className="bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 hover:dark:bg-gray-800 transition-colors duration-200 p-3 pl-14 pr-14 rounded-md shadow-sm">Contact Us</Link>                    
                        </MenuItem>
                    </MenuItems>
                </Menu>
            </nav>
        </div>
    )
}