"use client"

import React from 'react'
import Image from 'next/image'
import CustomButton from './CustomButton'
const Hero = () => {
  const handleScroll = () => {

  }
  return (
    <div className='hero'>
      <div className='flex-1 pt-36 bg-clip-padding-x'>
        <h1 className='hero__title padding-x padding-y'>
          Find, book, or rent a car - quickly
          and easily!
        </h1>
        <p className='hero__subtitle padding-x padding-y'>
          Streamline your car rental experiennce
          with our effortless booking process.
        </p>

       <CustomButton
        title="Explore Cars"
        containerStyles="bg-primary-blue
        text-white rounded-full mt-10 ml-14 hover:bg-sky-400"
        handleClick={handleScroll}
       />
      </div>
      <div className='hero__image-container max-w-2xl'>
      <div className='hero__image'>
        <Image src="/hero.png" alt="hero"
        fill className='object-contain'/>
      </div>
        <div className='hero__image-overlay'/>
      </div>
    </div>
  )
}

export default Hero