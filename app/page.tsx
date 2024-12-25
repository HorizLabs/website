'use client'
import { Handshake } from "lucide-react";
import { motion } from "motion/react"
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  

  return (
    <main>
      {/* Hero */}
      <motion.div className="flex flex-col pl-16 justify-center h-screen">
        <div className="motion-preset-slide-up-lg font-extrabold font-lg text-[66px] w-[85%]">
          <h1>
            Inspiring
            <motion.span className="ml-4 bg-clip-text text-transparent bg-gradient-to-tr from-[#fff456] to-[#ff8800]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}
            >students </motion.span>
            through research and competitions.
          </h1>
          <p className="flex flex-row gap-4 w-[95%] motion-preset-slide-up-lg dark:text-gray-300 text-gray-500 items-center text-[16.5px] font-normal"><Handshake size={50} /> Horizon Labs is a 501(c)(3) not-for-profit organization that address the issue of a lack of STEM majors through the creation of research programs and competitions.</p>
        </div>
      </motion.div>
      <motion.div className="trusted flex flex-col pl-16 justify-center bg-gradient-to-b dark:from-[#1b1b1b] dark:to-[#0e0e0e] h-[25vh]"    
      >
        <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y:0},
          hidden: { opacity: 0, y:50 }
        }}
        className="flex flex-row gap-10 w-[95%] items-center text-[16.5px] font-normal justify-center"
        >
          <p className="font-extrabold font-lg text-[30px]">
            Working with
          </p>
          <Link href={'https://digitalocean.com'}>
            <Image src="/assets/DigitalOcean.png" alt="Digital Ocean Logo" width={150} height={100} />
          </Link>
        </motion.div>
      </motion.div>
      {/* The foundation */}
      <div className="flex flex-col pl-16 justify-center h-[20vh] dark:bg-[#0e0e0e]">

      </div>
    </main>
  );
}
