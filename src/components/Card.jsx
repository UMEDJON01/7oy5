import React from 'react'
import Carousel from './Carousel'

function Card() {
  return (
    <div className='grid items-center justify-around grid-cols-1 md:grid-cols-2 mx-auto font-kumbh'>
      <Carousel/>
      <div className='max-w-[445px]'>
        <h4 className='text-[#FF7E1B] font-bold font-[13px] font-kumbh'>
          SNEAKER COMPANY 
        </h4>
        <h1 className='text-5xl font-bold font-kumbh text-[#1D2026]'>
          Fall Limited Edition Sneakers
        </h1>
        <p className='text-xl text-[#69707D]'>
          These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
        </p>
        <div className="price flex gap-4 items-center">
          <h2 className='text-2xl font-bold'>
            $125.00
          </h2>
          <p className='bg-[#FFEEE2] py-1 px-2 rounded-lg text-[#FF7E1B]'>50%</p>
        </div>
        <p className='line-through'>$250.00</p>
        <div className='flex items-center gap-4'>
          <div className='inline flex items-center bg-[#F6F8FD] gap-11 px-4 py-3 rounded-lg'>
            <button>-</button>
            <h4>1</h4>
            <button>+</button>
          </div>
          <button className='btn flex'>
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fill-rule="nonzero"/>
            </svg>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
