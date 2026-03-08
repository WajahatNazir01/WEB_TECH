import React from 'react'
import { MoveUpRight } from 'lucide-react';

const card = (props) => {
  return (
    <div className='bg-black rounded-3xl w-1/3 h-full overflow-hidden relative'>
        <img className='h-full w-full object-cover 'src={props.user.img} alt="reactimage" />
        <div className=' absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
            <h2 className='bg-white rounded-full flex justify-center items-center h-15 w-15 font-bold text-2xl'>{props.cardnumber}</h2>
            <p className='text-lg leading-normal tracking-tight pt-32 text-white'>{props.user.title}</p>
            <div className='flex justify-between'>
                <button className='bg-orange-500 text-xl font-semibold text-white rounded-2xl p-1 pt-0 pl-2 pr-2'>
                    {props.user.tag}
                </button>
                <button className='bg-orange-500 text-xl font-semibold text-white rounded-2xl p-1 pt-0'>
                     <MoveUpRight/>
                </button>
            </div>
   
        </div>
    </div>
  )
}

export default card