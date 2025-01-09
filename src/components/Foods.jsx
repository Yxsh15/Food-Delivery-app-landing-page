import React, { useState } from 'react'
import { data } from '../data/data'

const Foods = () => {
    // console.log(data)
    const [activeButton, setActiveButton] = useState('')
    const [foods, setFoods] = useState(data)
    //Filter function by food type
    const filType = (category) => {
        setFoods(
            data.filter((item) => {
                return item.category === category;
            })
        )
    }
    //Filter function by price
    const filPrice = (price) => {
        setFoods(
            data.filter((items) => {
                return items.price === price;
            })
        )
    }

    return (
        <div className='max-w-[1640px] mx-auto px-4 py-12 '>
            <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>

            {/* Filter row */}
            <div className='flex flex-col lg:flex-row justify-between'>
                {/* Filter type */}
                <div>
                    <p className='font-bold text-gray-700'>Filter Type</p>
                    <div className='flex flex-wrap'>
                        <button
                            onClick={() => {
                                setFoods(data);
                                setActiveButton('all');
                            }}
                            className={`m-2 border-orange-400 ${activeButton === 'all'
                                    ? 'bg-orange-600 text-white'
                                    : 'text-orange-600 hover:bg-orange-600 hover:text-white'
                                }`}
                        >
                            All
                        </button>
                        <button
                            onClick={() => {
                                filType('north');
                                setActiveButton('north');
                            }}
                            className={`m-2 border-orange-400 ${activeButton === 'north'
                                    ? 'bg-orange-600 text-white'
                                    : 'text-orange-600 hover:bg-orange-600 hover:text-white'
                                }`}
                        >
                            North Indian
                        </button>
                        <button
                            onClick={() => {
                                filType('continental');
                                setActiveButton('continental');
                            }}
                            className={`m-2 border-orange-400 ${activeButton === 'continental'
                                    ? 'bg-orange-600 text-white'
                                    : 'text-orange-600 hover:bg-orange-600 hover:text-white'
                                }`}
                        >
                            Continental
                        </button>
                        <button
                            onClick={() => {
                                filType('south');
                                setActiveButton('south');
                            }}
                            className={`m-2 border-orange-400 ${activeButton === 'south'
                                    ? 'bg-orange-600 text-white'
                                    : 'text-orange-600 hover:bg-orange-600 hover:text-white'
                                }`}
                        >
                            South Indian
                        </button>
                        <button
                            onClick={() => {
                                filType('chicken');
                                setActiveButton('chicken');
                            }}
                            className={`m-2 border-orange-400 ${activeButton === 'chicken'
                                    ? 'bg-orange-600 text-white'
                                    : 'text-orange-600 hover:bg-orange-600 hover:text-white'
                                }`}
                        >
                            Chicken
                        </button>
                    </div>
                </div>
                {/* Filter Price  */}
                <div>
                    <p className='font-bold text-gray-700'>Filter Price</p>
                    <div className='flex justify-around max-w-[360px] w-full'>
                        <button 
                        onClick={()=>{
                            filPrice('$');
                            setActiveButton('$');
                            }} 
                            className={`m-1 border-orange-400 ${ activeButton === '$' 
                            ? "bg-orange-600 text-white":
                             "text-orange-600 hover:bg-orange-600 hover:text-white"}`}>
                                $
                        </button>
                        <button onClick={()=>{
                            filPrice('$$');
                            setActiveButton('$$');
                            }} 
                            className={`m-1 border-orange-400 ${ activeButton === '$$' 
                            ? "bg-orange-600 text-white":
                             "text-orange-600 hover:bg-orange-600 hover:text-white"}`}>$$</button>
                        <button onClick={()=>{
                            filPrice('$$$');
                            setActiveButton('$$$');
                            }} 
                            className={`m-1 border-orange-400 ${ activeButton === '$$$' 
                            ? "bg-orange-600 text-white":
                             "text-orange-600 hover:bg-orange-600 hover:text-white"}`}>$$$</button>
                        <button onClick={()=>{
                            filPrice('$$$$');
                            setActiveButton('$$$$');
                            }} 
                            className={`m-1 border-orange-400 ${ activeButton === '$$$$' 
                            ? "bg-orange-600 text-white":
                             "text-orange-600 hover:bg-orange-600 hover:text-white"}`}>$$$$</button>
                    </div>
                </div>
            </div>
            {/* Display images */}
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
                {foods.map((item, index) => (
                    <div key={index} className='border shadow-xl rounded-lg hover:scale-105 duration-300'>
                        <img src={item.image} alt={item.name} className='w-full h-[200px] object-cover rounded-t-lg' />
                        <div className='flex justify-between px-2 py-4'>
                            <p className='font-bold'>{item.name}</p>
                            <p>
                                {/* reason to use span in p tag as styling in p tag would fuck up during responsiveness */}
                                <span className='bg-orange-500 text-white p-1 rounded-full'>{item.price}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Foods
