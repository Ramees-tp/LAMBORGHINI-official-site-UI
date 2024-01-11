import React from 'react'
import icon1 from '../src/assets/img/chat.png'
import icon2 from '../src/assets/img/magnifying-glass.png'
import icon3 from '../src/assets/img/menu.png'
import img1 from '../src/assets/img/OIP.png'

function Header() {
  return (
    <div className='md:fixed w-screen z-10'>
      <div className='bg-[#181818] text-white text-xs '>
        <nav className='flex justify-between items-center py-4 px-12 sm:pr-10'>
          <div>
            <ul className='flex flex-col space-y-2 justify-center  lg:flex lg:flex-row lg:justify-center lg:items-center space-x-5'>
               <li><img className='w-28' src={img1} alt="" /></li>
              <li><a href="">MODELS</a></li>
              <li><a href="">BEYOND</a></li>
              <li><a href="">OWNERSHIP</a></li>
              <li><a href="">MOTORSPOT</a></li>
            </ul>
          </div>
          <div>
            <ul className='flex flex-col items-center justify-end  sm:flex sm:flex-row sm:justify-center sm:items-center gap-3 sm:gap-5'>
            <li><a href="">DEALERSHIPS</a></li>
              <li><a href="">MUSEUM</a></li>
              <li><a href="">STORE</a></li>
              <img src={icon1} alt="" />
              <img src={icon2} alt="" />
              <img src={icon3} alt="" />
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Header
