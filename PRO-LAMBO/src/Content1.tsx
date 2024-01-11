import React from 'react'
import forward from '../src/assets/img/back.png'
import img2 from '../src/assets/img/car1.jpg'
import vid from '../src/assets/img/Lamborghini_Revuelto__thunder_meets_lightning(1080p)(0).mp4'

function Content1() {
  return (
    <div className='relative '>
      <video autoPlay loop playsInline muted src={vid} className='absolute h-screen w-screen object-cover -z-10'></video>
      <div className='p-20 md:p-28 sm:h-screen bg-cover' >
        <div className='text-white  flex flex-col items-center md:items-start mt-10 lg:mt-28 space-y-4 sm:space-y-8'>
            <div className='text-center md:text-left'>
            <h1 className='text-2xl lg:text-3xl font-semibold tracking-tighter'>REVEULTO</h1>
            <h1 className='text-5xl lg:text-8xl font-bold tracking-tighter'>FROM NOW ON</h1>
            </div>
            {/* <a className='hexagon h-12 w-14 bg-slate-200 flex justify-center items-center ' href=""><img className='' src={forward} alt="" /></a> */}
            <a className='hello ' href="">
              <div className='hexa bg-transparent '><span><img className='' src={forward} alt="" /></span></div>
            </a>
            <div className='flex gap-2'>
            <h1 className='border-b-4 border-gray pr-8 md:pr-16 lg:py-10 '></h1>
            <h1 className='border-b border-gray pr-8 md:pr-16 lg:py-10'></h1>
            <h1 className='border-b bordergray pr-8 md:pr-16 lg:py-10'></h1>
            </div>

        </div>
       
      </div>
    </div>
  )
}

export default Content1
