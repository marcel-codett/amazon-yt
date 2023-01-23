import { StarIcon } from '@heroicons/react/outline'
import React from 'react'
import Image from 'next/image'
import Currency from 'react-currency-formatter'
import { useDispatch } from 'react-redux'
import { addToBasket, removeFromBasket } from '../slices/basketSlice'
const CheckoutProduct = ({
    title,
    id, 
    price,
    rating, 
    category,
    hasPrime,
    description,
    image
    }) => {
        const dispatch = useDispatch()
        const addItemsToBasket = () => {
            const product = {title, id, price, rating, category, description, hasPrime, image }
            dispatch(addToBasket(product))
        }
        const removeItemFromBasket = () => {
            dispatch(removeFromBasket({id}))
        }
  return (
    <div className='grid grid-cols-5'>
        <Image 
        src={image}
        width={200}
        height={200}
        objectFit='contain'
        />
        <div className='col-span-3 mx-5'>
            <p>{title}</p>
            <div className='flex item-center'>
                {Array(rating).fill().map((_, i) => (
                    <StarIcon
                    key={i}
                    className='h-5 text-yellow-500'
                    />
                ))}
            </div>

            <p className='text-xs my-2 line-clamp-3'>{description}</p>
            <Currency quantity={price} currecy='GBP' className />
            {hasPrime && (
                <div className='flex items-center space-x-2'> 
                <img 
                loading='lazy'
                className='w-12'
                src="https://links.papareact.com/fdw" alt="" />
                <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
                </div>
            )}
        </div>

        {/* Right add button */}
        <div className='flex flex-col space-y-2 my-auto jusitify-self-end'>
                <button
                onClick={addItemsToBasket}
                className='button'>Add to Basket</button>
                <button
                onClick={removeItemFromBasket}
                className='button'>Remove from Basket</button>
        </div>
    </div>
  )
}

export default CheckoutProduct