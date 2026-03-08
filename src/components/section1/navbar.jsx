import React from 'react'

const navbar = () => {
  return (
    <div className='flex items-center justify-between px-6 py-16'>
        <h4 className='bg-black text-white px-6 py-3 rounded-full tracking-wider  uppercase'>Target Audience</h4>
        <button className='bg-gray-200 rounded-full uppercase px-6 py-3 tracking-wider text-sm shadow-gray-600
        font-bold'>Digital banking</button>
    </div>
  )
}

export default navbar