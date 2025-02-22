import React, { useState } from 'react'
import { AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import {BsFillCartFill, BsFillSaveFill} from 'react-icons/bs'
import {TbTruckDelivery} from 'react-icons/tb'
import {FaWallet, FaUserFriends} from 'react-icons/fa'
import {MdFavorite, MdHelp} from 'react-icons/md'

const Navbar = () => {
    const [nav,setNav] = useState(false)
    return (
        <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
            {/* left side */}
            <div className='flex items-center'>
                <div onClick={()=>{setNav(!nav)}} className='cursor-pointer'>
                    <AiOutlineMenu size={30} />
                </div>
                <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
                    We<span className='font-bold'>Eat</span></h1>
                <div className='hidden lg:flex items-center bg-gray-200 rounded-full text-[12px]'>
                    <p className='bg-black text-white rounded-full p-2'>Delivery</p>
                    <p className='p-2'>Pickup</p>
                </div>
            </div>
            {/* Search Input */}
            <div className='bg-gray-200 rounded-full flex items-center px-2 w-[300px]
            sm:w-[400px] lg:w-[500px]'>
                <AiOutlineSearch size={25} />
                <input className='bg-transparent p-2 w-full focus:outline-none' type='text' placeholder=' Search foods' />
            </div>
            <button className='bg-black text-white rounded-full p-3 hidden md:flex items-center py-2'>
                <BsFillCartFill size={20} className='mr-2'/> Cart
            </button>

            {/* Mobile menu */}
            {/* overlay */}
            {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : '' }
                {/* side drawer menu  */}
                <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"}> 
                    <AiOutlineClose onClick={()=>{setNav(!nav)}} size={30} className='absolute right-3 top-4 cursor-pointer'/>
                    <h2 className='text-2xl p-4'>Best<span className='font-bold'> Eats</span></h2>
                    <nav>
                        <ul className='flex flex-col p-4 text-gray-800'>
                            <li className='text-1xl py-4 flex'><TbTruckDelivery size={20} className='mr-2 ml-1'/>Orders</li>
                            <li className='text-1xl py-4 flex'><MdFavorite size={20} className='mr-2 ml-1'/>Favourites</li>
                            <li className='text-1xl py-4 flex'><FaWallet size={20} className='mr-2 ml-1'/>Wallet</li>
                            <li className='text-1xl py-4 flex'><MdHelp size={20} className='mr-2 ml-1'/>Help</li>
                            <li className='text-1xl py-4 flex'><AiFillTag size={20} className='mr-2 ml-1'/>Promotions</li>
                            <li className='text-1xl py-4 flex'><BsFillSaveFill size={20} className='mr-2 ml-1'/>Best Ones</li>
                            <li className='text-1xl py-4 flex'><FaUserFriends size={20} className='mr-2 ml-1'/>Invite Friends</li>
                        </ul>
                    </nav>
                </div>
        </div>
    )
}

export default Navbar
