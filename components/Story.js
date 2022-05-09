import React from 'react'
import Image from 'next/image'

const Story = ({img, username}) => {
  return (
    <div>
      <img className='h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-125 duration-200 ease-in-out 'src={img} alt="#" />

<p className='text-xs w-14 truncate'>{username}</p>
    </div>
  )
}

export default Story