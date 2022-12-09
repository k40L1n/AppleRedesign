import React from "react"
import Image from "next/image"
import Button from "../components/Button"

function Landing() {
  return (
    <section className='sticky top-0 mx-auto flex h-screen max-w-[1350px] items-center justify-between px-8'>
      <div className='space-y-8'>
        <h1 className='text-5-xl space-y-3 font-semibold tracking-wide lg:text-6xl xl:text-7xl'>
          <span className='block bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent'>
            Powered
          </span>
          <span className='block'>By Intellect</span>
          <span className='block'>Driven by Values</span>
        </h1>
        <div>
          <Button title='Buy Now' />
          <a href='' className='link'>
            Learn More
          </a>
        </div>
      </div>
      <div className='relative hidden h-[450px] w-[450px] transition duration-500 md:inline lg:h-[650px] lg:w-[650px]'>
        <Image
          alt='image missing'
          src='/iphone.png'
          layout='fill'
          objectFit='contain'
        />
      </div>
    </section>
  )
}

export default Landing