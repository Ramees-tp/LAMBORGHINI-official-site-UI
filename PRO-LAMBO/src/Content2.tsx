import React from 'react'
import car2 from '../src/assets/img/car1.jpg'
import forward from '../src/assets/img/back.png'
import back from '../src/assets/img/back1.png'
import plus from '../src/assets/img/plus.png'

function Content2() {
  return (
    <div>
      <div className='bg-cover h-screen text-white' style={{backgroundImage:`url(${car2})`}}>
        <div className='p-16 lg:p-24 space-y-5 xl:space-y-14 flex flex-col justify-center items-center lg:flex lg:flex-col lg:items-start'>
          <div className=' space-y-5'>
            <h1 className='text-4xl font-semibold'>MODELS</h1>
            <div className='flex gap-5'>
            <a className='hexagon h-12 w-14 bg-slate-200 flex justify-center items-center' href=""><img className='' src={back} alt="" /></a>
            <a className='hexagon h-12 w-14 bg-slate-200 flex justify-center items-center' href=""><img className='' src={forward} alt="" /></a>
            </div>
          </div>
          <div className='space-y-4 tracking-tighter text-center md:text-left'>
            <h1 className='text-4xl md:text-9xl font-bold '>REVUELTO</h1>
            <p className='text-xl sm:text-3xl font-semibold'>FROM NOW ON</p>
          </div>
          <div className='flex items-center space-x-5'>
          <a className='hexagon h-12 w-14 bg-slate-200 flex justify-center items-center' href=""><img className='' src={plus} alt="" /></a>
          <p className='text-lg'>Explore the <br /> model</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content2
