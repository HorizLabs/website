import { useEffect } from 'react';
import '../css/components/autoslider.css'
export function Research() {
    useEffect(() => {
        console.log(document.getElementById('slide'));
    }, [])
    return (
        <div className="font-[Outfit] bg-[#e9e9e9] dark:bg-[#2b2b2b] text-black dark:text-white p-3">
            <h1 className="text-[25px] font-[600]">Research</h1>
            <div className='slider'>
                <div className='slides'>
                    <div className='slide'>
                        <h1>Corp</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}