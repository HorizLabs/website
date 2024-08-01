import '@/css/contact.css'
import { RiGithubFill, RiLinkedinBoxFill } from '@remixicon/react'
import Link from 'next/link'

export default function Contact() {
    return (
        <>
            <div className='core_asic bg-[#EEEEEE] dark:bg-[#2E2F2F] flex-col h-[100vh] flex justify-center p-10 gap-11 content-center'>
                <div className='flex flex-col'>
                    <h1 className='text-[40px] font-black'>Contact Us</h1>
                    <p className='text-[19px]'>Interested? You can contact us through the relevant email.</p>
                </div>
                <div className='corpo flex gap-10'>
                    <div className='email_link bg-[#EEEEEE] dark:bg-[#2E2F2F]'>
                        <div className='flex flex-col gap-2'>
                            <h2 className='font-bold text-[20px]'>Social Media</h2>
                            <Link href={'https://github.com/horizlabs'} className='flex flex-row gap-2 hover:underline'><RiGithubFill /> Github</Link>
                            <Link href={'https://www.linkedin.com/company/horizlabs'} className='flex flex-row gap-2 hover:underline'><RiLinkedinBoxFill /> Linkedin</Link>
                        </div>
                    </div>
                    <div className='email_link bg-[#EEEEEE] dark:bg-[#2E2F2F]'>
                        <div className='flex flex-col gap-2'>
                            <h2 className='font-bold text-[20px]'>Emails</h2>
                            <ul>
                                <li className='flex gap-5'>Head: <Link href={'mailto:df@avnce.org'} className='transition-all flex flex-row dark:hover:text-yellow-50'>df<span className='dark:text-yellow-500 dark:hover:text-yellow-50 transition-all'>@avnce.org</span></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}