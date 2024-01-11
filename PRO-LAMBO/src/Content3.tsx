import React from 'react'
import forward from '../src/assets/img/back.png'
import orange from '../src/assets/img/revaulto.jpeg'
import bg1 from '../src/assets/img/car7.jpeg'

function Content3() {
  return (
    <div>
      <div className='py-12 px-16 sm:px-28 flex flex-col-reverse md:flex md:flex-row tracking-tighter text-[#202020]'>
        <div className='bg-white space-y-5 max-w-[50%] '>
           <p className='text-3xl font-medium'>CONFIGURATOR</p>
           <h1 className='sm:text-7xl font-bold '>CREATE YOUR REVUELTO</h1>
           <a className='hexagon h-12 w-14 bg-black flex justify-center items-center' href=""><img  className='invert' src={forward} alt="" /></a>
           <div className='text-lg text-slate-600 flex '>
            <h1 className='border-b-2 border-black sm:pr-8 py-3'>Revuelto</h1>
            <h1 className='border-b border-gray sm:pr-8 py-3'>Huracan</h1>
            <h1 className='border-b bordergray sm:pr-8 py-3'>Urus</h1>
           </div>
        </div>
        <div className=''>
            <img src={orange} alt="" />
        </div>
      </div>
      <div className='tracking-tighter bg-cover md:h-screen text-white'style={{backgroundImage:`url(${bg1})`}} >
        <div className='space-y-6 py-20 px-12 sm:px-24 md:pt-52 '>
           <p className='text-3xl font-medium'>DEALER LOCATOR</p>
           <div className='text-4xl lg:text-7xl font-bold'>
            <h1>FIND YOUR</h1>
            <h1>COUNTRY DEALER</h1>
           </div>
           <a className='hexagon h-12 w-14 bg-slate-200 flex justify-center items-center' href=""><img className='' src={forward} alt="" /></a>
        </div>
      </div>
    </div>
  )
}

export default Content3
