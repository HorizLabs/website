import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-inherit p-3">
            <div className="bg-gray-800 rounded-md p-4 font-['Outfit'] shadow-md flex justify-between w-[100%] gap-2">
                <div className="items-center flex gap-3">
                    <Image src={'/HorizonLabsLogo.png'} alt="Horizon Labs Logo" width={50} height={50} />
                    <h1 className="font-black md:text-[35px] text-[21px] transition-all">Horizon Labs</h1>
                </div>
                <ul className="flex flex-row items-center gap-4">
                    <li><Link href={'/software'}>Software</Link></li>
                    <li><Link href={'/#about'}>About</Link></li>
                </ul>
            </div>
        </nav>
    )
}