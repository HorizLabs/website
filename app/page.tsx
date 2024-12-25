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
            Sponsored by
          </p>
          <Link href={'https://digitalocean.com'}>
            <Image src="/assets/DigitalOcean.png" alt="Digital Ocean Logo" width={150} height={100} />
          </Link>
        </motion.div>
      </motion.div>
      {/* The foundation */}
      <div className="flex flex-col pl-16 justify-center min-h-[20vh] dark:bg-[#0e0e0e] pb-10 pt-10">
        <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y:0},
          hidden: { opacity: 0, y:50 }
        }}
        className="flex flex-col gap-4"
        >
          <h1 className="font-bold text-[30px]">Empowering through our <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#42b25e] to-[#17f64f]">initiatives.</span></h1>
          {/* Cards of all shapes and sizes, technically */}
          <div className="flex flex-col gap-5">
            <div className="flex flex-1 flex-row gap-5 items-center">
              <div className="flex flex-col gap-2 max-w-[30vw] h-[40vh] bg-zinc-900 rounded-md p-4">
                <h2 className="font-bold text-[25px]">Research</h2>
                <p className="text-[16.5px]">Horizon Labs allows students to be able to conduct and extend their research projects.</p>
              </div>
              <Link href={'https://irpo.net'} className="hover:scale-105 transition-transform flex flex-col gap-2 max-w-[55vw] h-[40vh] bg-gradient-to-bl from-purple-900 to-purple-700 rounded-md p-4">
                <h2 className="font-bold text-[25px]">IRPO</h2>
                <p className="text-[16.5px]">
                  The International Research and Programming Olympiad (IRPO) is a olympiad that extends the traditional olympiad format and applies programming skills within research based on a scientific theme changing yearly.
                </p>
              </Link>
            </div>
          </div>
        </motion.div>

        <div className="mt-32 mb-32">
          <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={{
            visible: { opacity: 1, y:0},
            hidden: { opacity: 0, y:50 }
          }}
          className="flex flex-col gap-4"
          >
            <h1 className="text-[30px] font-bold">Ready to take the next step? Learn more!</h1>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
