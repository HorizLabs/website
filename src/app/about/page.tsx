import '@/css/about.css'
import Image from 'next/image'

// Function imports
export default function About() {
    return (
        <>
            <div className="about_content min-h-[60vh] bg-[#EEEEEE] dark:bg-[#2E2F2F] flex">
                <div className='flex flex-col'>
                    <h1>Innovate, Lead, and Inspire</h1>
                    <p>These principles are what we have been going on since day 1 of Horizon Labs.</p>
                </div>
                <Image src={'/photos/SFO_City_Hall.png'} className='mr-28 rounded-lg hidden md:block' alt='SFO City Hall' width={250} height={700} />
            </div>
            <div className='dark:bg-[#051014] bg-gray-200 about_background sm:pl-[2em] pl-[1em] min-h-[40vh] gap-5 flex flex-row p-10'>
                {/* Quote */}
                <div className='content flex flex-col gap-5'>
                    <h2 className='font-[600] sm:text-[25px] lg:text-[35px] sm:w-[45%]'>Empowering future scientists to make an impact through testing and competitions.</h2>
                    <p className='sm:w-[45%] text-[14px] sm:text-[16px] lg:text-[17.5px]'>Horizon Labs is an organization that attempts to bring change where it is needed at, to future scientists and individuals interested in making change through our software and our tools, being founded with existing solutions and olympiads not being practical.</p>
                </div>
                <div>
                    <Image src={'/logo.png'} width={200} height={200} alt='logo' className='w-[500px]'/>
                </div>
            </div>
            <div className='dark:bg-[#051014] bg-gray-200 principles min-h-[20vh] flex flex-col gap-5 justify-center p-20'>
                <h2 className='text-[2em] font-semibold'>Principles</h2>
                <div className='flex flex-col gap-3 dark:bg-[#555555] bg-gray-300 p-20 w-[450px]  rounded-lg'>
                    <div className='text-[25px] font-medium'>
                        <h1>🔒 Privacy</h1>
                    </div>
                    <p className=''>Privacy and the right to privacy is one of our core principles.</p>
                </div>
            </div>
       </>
    )
}