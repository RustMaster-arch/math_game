import React from 'react'
import Link from 'next/link'

const Buttons = () => {
  return (
    <div className='flex flex-col'>
      <Link href={`/play/easy`} className='my-3'> <button className='w-full h-full my-3 easy pt rounded hover:brightness-110'>Easy</button> </Link>
      <Link href={`/play/medium`} className='my-3'> <button className='w-full h-full my-3 medium pt rounded hover:brightness-110'>Medium</button> </Link>
      <Link href={`/play/hard`} className='my-3'> <button className='w-full h-full my-3 hard pt rounded hover:brightness-110'>Hard</button> </Link>
      <Link href={`/play/very_hard`} className='my-3'> <button className='w-full h-full my-3 very_hard pt rounded hover:brightness-110'>Very Hard</button> </Link>
    </div>
  )
}

export default Buttons
