import '../css/components/explore.css'
import {ArrowRight, Diamond} from "@phosphor-icons/react"

export function Explore() {
    return (
        <>
            <div className="explore-sys bg-[#e9e9e9] dark:bg-[#2b2b2b] dark:text-white text-black flex justify-center flex-col p-5">
                <div className="explore-sys flex text-left flex-col gap-3">
                    <div className="flex flex-col gap-3">
                        <h1 className="text-[35px] font-bold">What is Horizon Labs?</h1>
                        <p className="text-[16px]">At its core, Horizon Labs is an organization that supplies software for organizations primarily within testing. However, we also conduct scientific research as an division and conduct competitions designed to engage and empower students to be in scientific fields.</p>
                        <a href='/organization' className="button flex explore-sys text-[17px] bg-green-600 select-none w-max pl-4 pr-4 pt-3 pb-3 rounded-md">Learn More <ArrowRight className='arrow translate-y-[2px] translate-x-1 transition' /></a>
                    </div>
                    <img src="/images/Horizon.webp" alt="Gradient of Horizon" className="rounded-md w-[100%] h-[325px]" />
                </div>
            </div>
            <div className="explore-sys bg-[#e9e9e9] dark:bg-[#2b2b2b] dark:text-white text-black flex justify-center flex-col p-5 gap-4">
                <h1 className="flex explore-sys text-[30px] font-extrabold">Explore the Divisions <Diamond className='translate-x-1 translate-y-1' /></h1>
                <div className='explore-row'>
                    <a href='/software' className='card bg-gradient-to-bl from-[#c06b6b] to-[#ce4319] flex-col'>
                        <div className='flex flex-row ml-5 explore-sys gap-3'>
                            <img src='/logo.png' alt="logo" width={50} height={50} />
                            <h1 className='text-[40px] font-black'>Horizon</h1>
                        </div>
                        <h1 className='ml-5 font-semibold text-[50px]'>Software</h1>
                    </a>
                </div>                
            </div>
        </>
    )
}