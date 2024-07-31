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
            <div className='min-h-[40vh] flex flex-col justify-center'>
                <p>Horizon Labs is built on the core principles to enable us to do our best.</p>
            </div>
        </>
    )
}