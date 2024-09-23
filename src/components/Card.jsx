import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosTrendingDown } from "react-icons/io";
import { GiPathDistance } from "react-icons/gi";
import { MdOutlineAccessTime } from "react-icons/md";
import { MdOutlineSpeed } from "react-icons/md";
import { LuFuel } from "react-icons/lu";
import { GiReceiveMoney } from "react-icons/gi";
function Card() {
  return (
    <div className='text-white px-5 space-y-4   py-5'>
        <div className='bg-zinc-900 py-2 px-3 border-zinc-500 h-20 rounded-xl border-2'>
            <div className='flex justify-between mb-2'>
                <h2>Riding Behaviour</h2>
                <i><FaArrowRightLong /></i>
            </div>
            <div className='flex h-7 justify-between' ><div className= ' flex bg-blue-500 gap-2 p-1 text-base rounded-md'><p className='text-sm '>94% </p><h3 className='bg-zinc-900 rounded-sm px-1 '> Excellent</h3></div>
            <p className='text-[8px] flex py-5 text-zinc-300'><i className='flex text-red-700'><IoIosTrendingDown />24% </i> vs preeceding period</p>
            </div>
        </div>
        <div className='bg-zinc-900 px-3 py-3 border-zinc-500 h-28 rounded-xl border-2 '>
            <div className='flex justify-between mb-2'>
                <h2>Journey</h2>
                <i><FaArrowRightLong /></i>
            </div>
            <div className='flex justify-between '>
                <div>
                   
                <p className='text-sm flex gap-1 text-zinc-300'>  <i className='bg-green-800 rounded-full p-[2px] text-green-300'><GiPathDistance /></i>Distance Travelled</p>
                <h2 className='flex'>85.19 <p className=''>Km</p>
                
                </h2>
                <p className='text-[8px] flex text-zinc-300'><i className='flex text-red-700'><IoIosTrendingDown />24%</i >  vs Preeceding period </p>
                </div>
                
                <div className=''>
                <p className='text-sm flex gap-1 text-zinc-300'><i className='bg-blue-400 rounded-full p-[2px] text-blue-700'><MdOutlineAccessTime /></i>Time Duration</p>
                <h2 className='flex'>2 <p>hr</p> <h2>20</h2> <p>Min</p>
                
                </h2>
                <p className='text-[8px] flex text-zinc-300 '><i className='flex text-red-700'><IoIosTrendingDown />24%</i >  vs Preeceding period</p>
                </div>
            </div>
        </div>
        <div className='bg-zinc-900 px-3 py-3 border-zinc-500 h-28 rounded-xl border-2 '>
            <div className='flex justify-between mb-2'>
                <h2>Speed</h2>
                <i><FaArrowRightLong /></i>
            </div>
            <div className='flex justify-between '>
                <div>
                   
                <p className='text-sm flex gap-1 text-zinc-300'>  <i className='bg-blue-600 rounded-full p-[2px] text-green-300'><MdOutlineSpeed /></i>Average Speed </p>
                <h2 className='flex'>50 <p>Km/hr</p>
                
                </h2>
                <p className='text-[8px] flex text-zinc-300 '><i className='flex text-red-700'><IoIosTrendingDown />24%</i >  vs Preeceding period </p>
                </div>
                
                <div className=''>
                <p className='text-sm flex gap-1 text-zinc-300'><i className='bg-yellow-900 rounded-full p-[2px] text-yellow-400'><MdOutlineSpeed /></i>Top Speed</p>
                <h2 className='flex'><p>120km/hr</p>
                
                </h2>
                <p className='text-[8px] flex text-zinc-300 '><i className='flex text-red-700'><IoIosTrendingDown />24%</i >  vs Preeceding period</p>
                </div>
            </div>
        </div>
        <div className='bg-zinc-900 px-3 py-3 border-zinc-500 h-28 rounded-xl border-2 '>
            <div className='flex justify-between mb-2'>
                <h2>Fuel</h2>
                <i><FaArrowRightLong /></i>
            </div>
            <div className='flex  justify-between'>
                <div>
                   
                <p className='text-sm flex gap-1 text-zinc-300'>  <i className='bg-green-800 rounded-full p-[2px] text-green-400'><LuFuel /></i>Fuel Consumed</p>
                <h2 className='flex'><p>3.01L</p><h2/>
                
                </h2>
                <p className='text-[8px] flex text-zinc-300 '><i className='flex text-red-700'><IoIosTrendingDown />24%</i >  vs Preeceding period </p>
                </div>
                
                <div className=''>
                <p className='text-sm flex gap-1 text-zinc-300'><i className='bg-green-800 rounded-full p-[2px] text-green-400'><GiReceiveMoney /></i>Fuel Cost</p>
                <h2 className='flex'><p>287</p>
                
                </h2>
                <p className='text-[8px] flex text-zinc-300 '><i className='flex text-red-700'><IoIosTrendingDown />24%</i >  vs Preeceding period</p>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Card