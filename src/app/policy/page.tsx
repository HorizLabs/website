'use client'
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {motion} from "framer-motion";
import { getCookie, setCookie } from "cookies-next";
import Footer from "@/components/Footer";

export default function PolicyPage() {
  // Fancy loading screen
  const [loadingStatus, setLoadingStatus] = useState(true);
  useEffect(() => {
    setTimeout(async () => {
      if (getCookie('platformVersion') == undefined) {
        setCookie('platformVersion', (await (await fetch('/api')).json()).apiVersion)
        setLoadingStatus(false)
      } else {
        setLoadingStatus(false)
      }
    }, 0)
  },[])
  
  // Value
  return (
     <>
        <div className={`${loadingStatus ? 'visible' : 'hidden'} bg-blue-700 w-[100vw] h-[100vh] flex justify-center flex-col items-center text-white`}>
          <Image src={'/HorizonLabsLogo.png'} alt="Horizon Labs Logo" width={150} height={150} className="animate-pulse" />
          {/* <p className="absolute bottom-0 mb-5 m-3 text-left">Having issues with the Network? Check the <Link className="underline" href={'https://status.irpo.net'}>server status</Link>.</p> */}
        </div>
        <motion.main initial={{opacity: 0}}
        animate={{opacity: loadingStatus ? 0 : 1}}
        transition={{duration: 1}}
        className="bg-green-700 text-white"
        >
        <main className={`bg-green-700 text-white ${loadingStatus ? 'hidden' : 'visible'} transition-all`}>
          <Navbar />
          <div>
          <section className="hero min-h-[50vh] flex items-center justify-center bg-gradient-to-b text-white"> <div className="container mx-auto px-6 text-left">
              <h1 className="text-4xl md:text-6xl font-black mb-8">
              Organization Policies
              </h1>
              </div>
            </section>
            <section className="bg-gradient-to-b from-green-700 to-green-800 min-h-[30vh]">
              <h1 className="flex justify-center font-semibold">Read the documents that governs all of Horizon Labs and our duties, here.</h1>
              <ul className="list-none flex justify-center flex-col items-center">
                {/* <li><Link href={'/documents/Bylaws.pdf'} className="text-[#F5F5F5] hover:underline">Organization Bylaws</Link></li> */}
                <li><Link href={'/documents/Conflict of Interest Policy.pdf'} className="text-[#F5F5F5] hover:underline">Conflict of Interest Policy</Link></li>
              </ul>
            </section>
          </div>
        </main>
        <Footer />
        </motion.main>
      </>
    );
}
