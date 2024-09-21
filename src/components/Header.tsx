import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = ({children, className}: { children: React.ReactNode; className: string; }) => {
  return (
    <div className={`header ${className}`}>
      <Link href={"/"} className={"md:flex-1"}>
        <Image src={"/icons/MathmaticsImage.jpeg"} alt='Logo with name' width={120} height={32} 
          className='hidden md:block'/>

        <Image src={"/icons/MathmaticsImage.jpeg"} alt='Logo' width={32} height={32} 
          className='mr-2 md:hidden'/>
      </Link>
      {children}
    </div>
  )
}

export default Header
