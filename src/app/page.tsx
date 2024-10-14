'use client'
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  // Fancy loading screen
  const [loadingStatus, setLoadingStatus] = useState(true);
  useEffect(() => {
    setTimeout(async () => {
      if ((await (await fetch('/api')).json()).apiVersion == '1.0.0B') {
        setLoadingStatus(false)
      }
    }, 2000)
  },[])
  
  // Value
  return (
     <>
        <div className={`${loadingStatus ? 'visible' : 'hidden'} bg-blue-700 w-[100vw] h-[100vh] flex justify-center flex-col items-center text-white`}>
          <Image src={'/HorizonLabsLogo.png'} alt="Horizon Labs Logo" width={150} height={150} className="animate-pulse" />
          <p className="absolute bottom-0 mb-5 m-3 text-left">Having issues with the Network? Check the <Link className="underline" href={'https://status.irpo.net'}>server status</Link>.</p>
        </div>
        <main className={`bg-blue-700 text-white ${loadingStatus ? 'hidden' : 'visible'} transition-all`}>
          <Navbar />
          <div>
          <section className="hero min-h-screen flex items-center justify-center bg-gradient-to-b text-white"> <div className="container mx-auto px-6 text-left"> <h1 className="text-4xl md:text-6xl font-bold mb-8">
            Empowering students to succeed through research and competitions.
            </h1> <a href="#about" className="bg-white text-blue-600 py-3 px-8 rounded-full text-lg font-semibold hover:bg-blue-100 transition duration-300">
            Learn more
            </a> </div> </section>
          </div>
        </main>
      </>
    );
}
