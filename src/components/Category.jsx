import React from 'react'
import { categories } from '../data/data'

const Category = () => {
    console.log(categories)
  return (
    <div className='m-auto max-w-[1640px] px-4 py-12'>
      <h1 className='text-orange-500 font-bold text-4xl text-center'>Top Categories</h1>
      {/* Categories  */}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6'>
        {categories.map((item,index)=>(
            <div key={index} className='bg-gray-400 rounded-lg p-4 flex justify-between items-center'>
                <h2 className='font-bold sm:text-xl'>{item.name}</h2>
                <img className={`${item.id === 3 ? 'w-20 h-20' : 'w-24 h-24'} w-20 object-cover`} src={item.image} alt={item.name} />
            </div>
        ))}
      </div>
    </div>
  )
}

export default Category
