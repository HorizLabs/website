import '@/css/product.css'
import { RiBattery2ChargeFill, RiHardDrive2Fill, RiLinksFill } from '@remixicon/react'
import Link from 'next/link'
export default function HorizonProject() {
    return (
        <>
            <div className="content_horizon h-[50vh] bg-[#95e6ff] flex p-10 flex-col">
                <h1 className='text-black text-[35px] font-bold'>Introducing Horizon</h1>
                <p className='text-black sm:w-[40%]'>A next-generation testing platform to allow individuals to do their best.</p>
            </div>
            <div className='content_center min-h-[20vh] text-white bg-[#4385c4] flex flex-row p-8 gap-1'>
                <div className='content_center flex flex-col'>
                    <h2 className='text-[23px] font-semibold'>What is Horizon?</h2>
                    <p className='sm:w-[40%]'>Horizon is a  simple platform that allows for individuals to be able to create and host tests with relative ease. Built on Postgres and ontop of React.</p>
                </div>
            </div>
            <div className='column_corp bg-[#EEEEEE] dark:bg-[#2E2F2F] min-h-[20vh] flex justify-center flex-col p-7'>
                <div className='flex flex-col gap-4'>
                    <h1 className='text-[30px] font-[650]'>Why choose Horizon?</h1>
                    <div className='column_corp flex-col flex gap-3'>
                        <div className='flex flex-col justify-center column_corp gap-2 max-w-xs'>
                            <h1 className='text-[20px] text-xl font-semibold flex gap-2 column_corp'><RiHardDrive2Fill /> All-In-One</h1>
                            <hr className='bg-white w-[90%]' />
                            <p>The platform contains both the server and the client software, with you needing to customize and configure it further to your needs.</p>
                        </div>
                        <div className='flex flex-col justify-center column_corp gap-2 max-w-xs'>
                            <h1 className='text-[20px] text-xl font-extrabold flex gap-2 column_corp'><RiBattery2ChargeFill /> Powerful</h1>
                            <hr className='bg-white w-[90%]' />
                            <p>Horizon is powerful with features designed to be able to maintain testing and testing integrity with many features created to maintain productivity and limit issues.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='column_corp flex justify-center min-h-28 bg-slate-500 flex-col gap-2 p-11'>
                <h1 className='text-[20px] font-extrabold'>Ready?</h1>
                <p>Learn how to setup and utilize Horizon server.</p>
                <Link href={'https://github.com/HorizLabs/server'} className='bg-slate-900 rounded-md pl-20 pr-20 pt-3 pb-3 flex flex-row gap-2 text-[17.5px]'><span><RiLinksFill /></span>Visit</Link>
            </div>
        </>
    )
}