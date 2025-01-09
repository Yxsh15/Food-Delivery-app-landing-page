import React from 'react'

const Cards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {/* Cards */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/40 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
            <p className='px-2'>Through 01/14</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now!</button>
        </div>
        <img className="max-h-[170px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
      </div>
      {/* Cards */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/40 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>New Restaurants</p>
            <p className='px-2'>Added Daily</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now!</button>
        </div>
        <img className="max-h-[170px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
      </div>
      {/* Cards */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/40 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>South Indian</p>
            <p className='px-2'>Authentic Cusine</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now!</button>
        </div>
        <img className="max-h-[170px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.pexels.com/photos/941869/pexels-photo-941869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
      </div>
    </div>
  )
}

export default Cards
