import '@/css/main.css'
import Link from 'next/link';

export default function Home() {
  let VIDEO_ID = 'https://www.youtube-nocookie.com/embed/B1L2wXvTqNU'
  return (
    <main>
        <div className='introduction_header gap-4'>
          <h1 className='font-bold'>Innovate, Lead, Inspire.</h1>
          <p>Horizon Labs is a organization that follows and expands upon these principles.</p>
          <Link href={'/about'} className='bg-[#A599B5] rounded-md p-2 text-white'>Learn More</Link>
        </div>
        <div className='horizon_platform bg-[#CDDDDD] text-[#051014]
        min-h-52 flex p-5
        md:flex-col lg:flex-row gap-5'>
          <div className='flex flex-col gap-4'>
            <h1 className='font-semibold text-[30px]'>Introducing the Horizon Platform</h1>
            <p className='w-[300px]'>Horizon is an all new platform that we are developing to be able to allow individuals to do their best and make it easier on creators in testing.</p>
            <Link href={'/about'} className='bg-[#A599B5] rounded-md p-2 w-fit text-white'>Learn More</Link>
          </div>
          <div>
           <iframe width="560" className='rounded-md frame_video w-[400px] sm:w-[560px]' height="315" src={`${VIDEO_ID}?autoplay=1&mute=1`} title="Video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
        </div>
    </main>
  );
}
