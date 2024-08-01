import '@/css/about.css'
import Image from 'next/image'

// Function imports
export default function About() {
    return (
        <>
            <div className="about_content min-h-72 bg-[#EEEEEE] dark:bg-[#2E2F2F] flex">
                <div>
                    <h1>Innovate, Lead, and Inspire</h1>
                    <p>These principles are what we have been going on since day 1 of Horizon Labs.</p>
                </div>
            </div>
            <div className='core_story min-h-72 dark:bg-[#051014] bg-gray-200'>
                <div className='content'>
                    <h2 className='font-[600] sm:text-[35px] text-[25px]'>Origins</h2>
                    <p>CONTENT_NAME</p>
                </div>
            </div>
            <div className='dark:bg-[#051014] bg-gray-200 about_background sm:pl-[2em] pl-[1em] min-h-[40vh] gap-5 flex flex-row gap-15 p-10'>
                {/* Quote */}
                <div className='content flex flex-col gap-5'>
                    <h2 className='font-[600] sm:text-[25px] lg:text-[35px] sm:w-[45%]'>Empowering future scientists to make an impact through testing and competitions.</h2>
                    <p className='sm:w-[45%] text-[14px] sm:text-[16px] lg:text-[17.5px]'>Horizon Labs is an organization that attempts to bring change where it is needed at, to future scientists and individuals interested in making change through our software and our tools, being founded with existing solutions and olympiads not being practical.</p>
                </div>
                <div>
                    <Image src={'/logo.png'} width={200} height={200} alt='logo' className='w-[500px]'/>
                </div>
            </div>
            <div className='join min-h-[40vh] bg-gray-300 dark:bg-[#4d4d4d] flex justify-center'>
                <div className='join_card rounded-md w-[95%] sm:w-[50%] flex-col flex gap-3'>
                    <h1 className='font-extrabold text-[25px]'>Contact us</h1>
                    <p className='w-[70%] text-[18px]'>Interested in the organization and our mission? We would love to work with you!</p>
                    <form className='flex gap-5 flex-col'>
                        <div className='form_input flex'>
                            <label htmlFor='email'>Email: </label>
                            <input name='email' type='email' className='bg-gray-600 text-white rounded-lg w-[95%] m-auto p-2' placeholder='hello@horizonlabs.app' />
                        </div>
                        <div className='form_input flex'>
                            <label htmlFor='email'>Email: </label>
                            <textarea name='email' className='bg-gray-600 text-white rounded-lg w-[95%] m-auto p-2' placeholder='Content' />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}