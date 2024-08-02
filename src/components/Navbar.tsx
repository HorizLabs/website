// 'use client'

// Styles import
import '@/css/components/navbar.css'
import Image from 'next/image'
import Link from 'next/link'

// This is for the main navbar in the main page
export function NavbarComponent() {
    return (
        <>
            <nav className={'navbar'}>
                <Link href={'/'} className={'navbar_header'}>
                    {/* Logo and Name as header */}
                    <Image src={'/logo.png'} width={50} height={50} alt='Horizon Logo' />
                    <h1 className='text-black dark:text-white'>Horizon Labs</h1>
                </Link>
            </nav>
            {/* <div className='min-h-10 bg-blue-400 flex justify-center'>
                <h1>Horizon has launched!</h1>
            </div> */}
        </>
    )
}