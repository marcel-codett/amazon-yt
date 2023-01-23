import React from 'react'
import Image from 'next/image'
import { SearchIcon, 
  ShoppingCartIcon, 
  MenuIcon } from '@heroicons/react/outline'
import { useSession, signIn, signOut } from "next-auth/react"
import {useRouter} from 'next/router'
import { useSelector } from 'react-redux'
import { selectItems } from '../slices/basketSlice'
const Header = () => {
  const { data: session} = useSession();
  const router = useRouter()
  const items = useSelector(selectItems)

  return (
    <header>
        <div className='flex items-center bg-amazon_blue p-1 flex-grow py-2'>
            <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
                <Image
                onClick={() => router.push('/')}
                src='https://links.papareact.com/f90' 
                width={150}
                height={40}
                objectFit='contain'
                className='cursor-pointer'
                /> 
    
            </div>

            {/* seatch bar */}
            <div className='hidden bg-yellow-400  sm:flex items-center
             hover:bg-yellow-500 cursor-pointer rounded-md h-10 flex-grow'>
                <input type="text" className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md
                focus:outline-none px-4'/>
                <SearchIcon className='h-12 p-4' />
            </div>
            {/* Right hand side */}
            <div className='text-white flex items-center text-xs
            space-x-6 mx-6 whitespace-nowrap'>
              <div onClick={!session ? signIn : signOut}  className='link'>
                <p>
                  {session ? `Hello  ${session.user.name}` : 'signIn'}
                </p>
                <p className='font-extrabold md:text-sm'>Account & Lists</p>
              </div>
              <div className='link'>
                <p>Returns</p>
                <p className='font-extrabold md:text-sm'>Orders</p>
              </div>
              <div
              onClick={() => router.push('/checkout')}
              className='relative link flex items-center'>
                <span className='absolute top-0 right-0 md:right-10 h-4 w-4
                bg-yellow-400 text-center rounded-full text-black font-bold'>{items.length < 1 ? 0 : items.length}</span>
                <ShoppingCartIcon className='h-10' />
                <p className='font-extrabold md:text-sm hidden md:inline mt-2'>Basket</p>
              </div>
            </div>
        </div>

        <div className='flex item-center pl-6 bg-amazon_blue-light
        text-white text-sm space-x-3 p-2'>
          <p className='link flex item-center'>
            <MenuIcon className='h-6 mr-1' />
            All
          </p>
          <p className='link'>Prime Video</p>
          <p className='link'>Amazon Business</p>
          <p className='link'>Today's Deals</p>
          <p className='link hidden lg:inline-flex'>Electronics</p>
          <p className='link hidden lg:inline-flex'>Food & Grocery</p>
          <p className='link hidden lg:inline-flex'>Prime</p>
          <p className='link hidden lg:inline-flex'>Buy Again</p>
          <p className='link hidden lg:inline-flex'>Shipper Toolkit</p>
          <p className='link hidden lg:inline-flex'>Health & Personal Care</p>
        </div>
    </header>
  )
}

export default Header