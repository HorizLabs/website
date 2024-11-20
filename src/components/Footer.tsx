import Image from "next/image";
import Link from "next/link";
// import Link from "next/link";

export default function Footer() {
    return (
        <>
            <footer className="font-['Outfit'] flex p-5 bg-gray-800 text-white justify-center gap-4">
                <div className="items-center flex flex-col gap-3 p-3">
                    <div className="items-center flex gap-3">
                        <Image src={'/HorizonLabsLogo.png'} alt="Horizon Labs Logo" width={50} height={50} />
                        <h1 className="font-black md:text-[35px] text-[21px] transition-all">Horizon Labs</h1>
                    </div>
                    <h1>Email: <Link href={'mailto://dheeraj.c@irpo.net'} className="text-blue-100">dheeraj.c@irpo.net</Link></h1>
                    {/* <p>Join the Horizon Network!</p> */}
                </div>
                <div className="links p-3">
                    <p className="font-semibold">Organization</p>
                    <ul className="list-none">
                        <li><Link className="text-blue-100" href="/policy">Policies</Link></li>
                    </ul>
                </div>
            </footer>
            <div className="font-['Outfit'] flex p-2 bg-gray-900 text-white justify-center">
                <p>©{new Date().getFullYear()} Horizon Labs, Inc. All Rights Reserved.</p>
            </div>
        </>
    )
}