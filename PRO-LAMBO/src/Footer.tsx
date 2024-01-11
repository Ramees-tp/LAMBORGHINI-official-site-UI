import React from 'react'
import insta from '../src/assets/icons/instagram (1).png'
import face from '../src/assets/icons/facebook-app-symbol.png'
import tube from '../src/assets/icons/youtube (1).png'
import x from '../src/assets/icons/twitter.png'
import tick from '../src/assets/icons/music.png'
import link from '../src/assets/icons/linkedin-big-logo.png'
import weibo from '../src/assets/icons/sina-weibo.png'
import play from '../src/assets/icons/play-button.png'
import wechat from '../src/assets/icons/wechat.png'
import disco from '../src/assets/icons/discord.png' 

function Footer() {
  return (
    <div>
      <div className='bg-[#181818] text-white p-10 space-y-7'>
        <div className='flex flex-col-reverse gap-4 md:flex md:flex-row items-center justify-between'>
            <div className='flex flex-wrap max-w-[60%] space-x-3 text-lg'>
                <a href="">COMPANY</a>
                <a href="">FINANCIALS</a>
                <a href="">CAREER</a>
                <a href="">CONTACT US</a>
                <a href="">SUSTAINABILITY</a>
                <a href="">MEDIA CENTER</a>
                <a href="">PRIVACY&LEGAL</a>
                <a href="">COOKIE SETTINGS</a>
                <a href="">SITMAP</a>
                <a href="">NEWSLETTER</a>
                <a href="">ACCESSIBILITY</a>
            </div>
            <div className='flex justify-end gap-4'>
                <img src={insta} alt="" />
                <img src={face} alt="" />
                <img src={tube} alt="" />
                <img src={x} alt="" />
                <img src={tick} alt="" />
                <img src={link} alt="" />
                <img src={weibo} alt="" />
                <img src={play} alt="" />
                <img src={wechat} alt="" />
                <img src={disco} alt="" />
            </div>
            <div></div>
        </div>
        <div className=''>
            <p>* The consumption and emissions values in the website refer to your geographical IP. This value might be unrealistic if you navigate using VPN or if the position of your Internet provider is imprecise. If you believe you are incorrectly geolocalized, contact your dealer to get valid consumption and emissions information in your area.</p></div>
        <div  className='text-lg'>
            <p>Copyright © 2023 Automobili Lamborghini S.p.A. a sole shareholder company part of Audi Group.</p>
            <p>All rights reserved. VAT no. IT 00591801204</p>
            <p>WARNING ABOUT ILLEGAL OFFERS OF ALLEGED SHARES OF AUTOMOBILI LAMBORGHINI S.P.A.</p>
            <p>Automobili Lamborghini S.p.A. got the notice that several third parties across different countries are allegedly offering shares in Automobili Lamborghini S.p.A. These</p>
            <p>offers are unlawful and originate neither from Volkswagen Aktiengesellschaft nor from any of its subsidiaries.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
