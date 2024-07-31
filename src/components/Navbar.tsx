// 'use client'

// Styles import
import '@/css/components/navbar.css'
import Image from 'next/image'

// This is for the main navbar in the main page
export function NavbarComponent() {
    return (
        <nav className={'navbar'}>
            <div className={'navbar_header'}>
                {/* Logo and Name as header */}
                <Image src={'/logo.png'} width={50} height={50} alt='Horizon Logo' />
                <h1>Horizon Labs</h1>
            </div>
        </nav>
    )
}