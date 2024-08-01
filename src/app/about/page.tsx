import '@/css/about.css'
import Image from 'next/image'

// Function imports
export default function About() {
    return (
        <>
            <div className="about_content min-h-72 bg-[#2E2F2F] flex">
                <div>
                    <h1>Innovate, Lead, and Inspire</h1>
                    <p>These principles are what we have been going on since day 1 of Horizon Labs.</p>
                </div>
            </div>
            <div className='bg-[#051014] about_background min-h-[40vh] flex flex-row gap-16'>
                {/* Quote */}
                <div className='content flex flex-col gap-5'>
                    <h2 className='font-[600] text-[35px] w-[45%]'>Empowering future scientists to make an impact through testing and competitions.</h2>
                    <p className='w-[45%]'>Horizon Labs is an organization that attempts to bring change where it is needed at, to future scientists and individuals interested in making change through our software and our tools, being founded with existing solutions and olympiads not being practical.</p>
                </div>
                {/* <div>
                    <h1>TRim</h1>
                </div> */}
            </div>
            <div className='join min-h-[30vh] bg-[#4d4d4d] flex justify-center'>
                <div className='join_card rounded-md flex-col flex'>
                    <h1 className='font-extrabold text-[25px]'>Join us</h1>
                    <p className='w-[50%] text-[18px]'>Interested in the organization and our mission? Join us! We love to have individuals join us and be able to work with us on our tools among other things!</p>
                </div>
            </div>
        </>
    )
}