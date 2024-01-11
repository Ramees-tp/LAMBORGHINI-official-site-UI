import React from 'react'
import img2 from '../src/assets/img/car6.jpeg'
import car4 from '../src/assets/img/car4.jpeg'
import car5 from '../src/assets/img/car5.webp'

function Content4() {
  return (
    <div>
      <div className='container m-auto px-12 md:px-24'>
        <div className=' py-14 text-[#202020]'>
           <p className=' font-bold text-xl sm:text-3xl'>NEWS</p>
           <h1 className=' tracking-tighter font-bold pb-7 text-3xl md:text-8xl'>LAMBORGHINI WORLD</h1>
           <img src={img2} alt="" />
        </div>

        <div>
            <div className='space-y-5 sm:flex items-center justify-between'>
                <div className='w-[75%] space-y-6'>
                <div className='space-y-4'>
                    <p className='text-xl font-medium'>27 OCTOBER 2023</p>
                   <div className='flex gap-4'>
                   <button className='bg-gray-200 text-sm p-1 px-2  hover:bg-black hover:text-white'>EVENTS</button>
                    <button className='bg-gray-200 text-sm p-1 px-2  hover:bg-black hover:text-white'>HERITAGE</button>
                   </div>
                </div>
                <div className='space-y-6'>
                    <h1 className='text-4xl font-semibold'>AUTOMOBILI LAMBORGHINI MAKES ITS DÉBUT AT AUTO MOTO D’EPOCA BOLOGNA</h1>
                    <p className='text-slate-500'>Automobili Lamborghini is making its official début at the 40th edition of Auto Moto d'Epoca.</p>
                </div>
                </div>
                <div><button className='border-2 p-2 px-8  hover:bg-black hover:text-white'>READ MORE</button></div>
            </div>
        </div>

        <div className=' flex flex-col space-y-28  items-center py-28'>
            <div className='space-y-10 '>
            <div className='sm:grid grid-cols-2 grid-rows-1 gap-10 '>
                <img className='w-[100%]' src={car4} alt="" />
                <div className='flex flex-col items-start justify-between'>
                    <p>20 OCTOBER 2023</p>
                    <div><button className='bg-gray-200 text-sm px-2 text-black  hover:bg-black hover:text-white'>EVENTS</button>
                    <h1 className='text-4xl font-bold'>LAMBORGHINI RIGA GRAND OPENING</h1></div>
                    <button className='border-2 p-2 px-8  text-black  hover:bg-black hover:text-white'>READ MORE</button>
                </div>
            </div>
            <div className='sm:grid grid-cols-2 grid-rows-1 gap-10 '>
                <img className='w-[100%]' src={car5} alt="" />
                <div className='flex flex-col items-start justify-between'>
                    <p>20 OCTOBER 2023</p>
                    <div><button className='bg-gray-200 text-sm px-2 text-black  hover:bg-black hover:text-white'>EVENTS</button>
                    <h1 className='text-4xl font-bold'>LAMBORGHINI ESPERIENZA GIRO EXPANDS TO SOUTHEAST ASIA</h1></div>
                    <button className='border-2 p-2 px-8  text-black  hover:bg-black hover:text-white'>READ MORE</button>
                </div>
            </div>
            </div>
            <button className='border-2 p-3 px-16 bg-[#202020]  text-white  hover:bg-white hover:text-black'>READ MORE</button>
        </div>

      </div>
    </div>
  )
}

export default Content4
