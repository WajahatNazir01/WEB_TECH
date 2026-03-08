import React from 'react'
import { MoveUpRight } from 'lucide-react';

const leftcontent = () => {
  return (
    <div className='w-1/3 h-full flex flex-col justify-between p-6 '>
        <h3 className='font-bold text-4xl tracking-normal'>Prospective <br /><span className='text-gray-700'>customer </span>
        <br />segmentation</h3>
        <p className='text-lg text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime molestiae amet officiis solut..</p>
        <div className='text-8xl'>
            <MoveUpRight/>
        </div>
    </div>
  )
}

export default leftcontent