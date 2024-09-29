import { useEffect } from 'react';
import '../css/components/explore.css'

export function Explore() {
    useEffect(() => {
        console.log(document.getElementById('slide'));
    }, [])
    return (
        <div className="explore-sys font-[Outfit] bg-[#e9e9e9] dark:bg-[#2b2b2b] text-black dark:text-white p-4 flex flex-col gap-3">
            <h1 className='text-[24px] font-semibold'>Explore our divisions</h1>
            <div className='explore-row'>
                {/* bg-[#cdcdcd] dark:bg-[#303030] */}
                <div className='card max-w-[50vw] p-12 max-h-32 min-w-[30vw] bg-white'>
                    <h1 className='text-[35px] ml-4 w-[50%] flex font-[800] text-black'>Software Development</h1>
                </div>
            </div>
        </div>
    )
}