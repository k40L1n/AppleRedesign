import React from "react"
import Image from "next/image"
import Link from "next/link"
import { SearchIcon, ShoppingBagIcon, UserIcon } from "@heroicons/react/outline"

function Header() {
  const session = false

  return (
    <header className='sticky top-0 z-30 flex w-full justify-between bg-[#e7ecee] p-4 '>
      <div className='flex items-center justify-center md:w-1/5'>
        <Link href='/'>
          <div className='relative h-10 w-5 cursor-pointer opacity-75 transition hover:opacity-100'>
            <Image
              alt=''
              src='https://rb.gy/vsvv2o'
              layout='fill'
              objectFit='contain'
            />
          </div>
        </Link>
      </div>
      <div className='hidden flex-1 items-center justify-center space-x-8 md:flex'>
        <a href='' className='headerLink'>
          Product
        </a>
        <a href='' className='headerLink'>
          Explore
        </a>
        <a href='' className='headerLink'>
          Support
        </a>
        <a href='' className='headerLink'>
          Business
        </a>
      </div>
      <div className='flex items-center justify-center gap-x-4 md:w-1/5'>
        <SearchIcon className='headerIcon' />
        <Link href='/checkout'>
          <div className='relative cursor-pointer'>
            <span className='absolute -top-1 -right-1 z-50 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-[10px] text-white'>
              5
            </span>
            <ShoppingBagIcon className='headerIcon' />
          </div>
        </Link>

        {session ? (
          <Image
            src={
              "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
            }
            alt=''
            className='cursor-pointer rounded-full'
            width={34}
            height={34}
          />
        ) : (
          <UserIcon className='headerIcon' />
        )}
      </div>
    </header>
  )
}

export default Header
