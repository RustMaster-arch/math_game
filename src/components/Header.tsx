import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = ({children, className}: { children: React.ReactNode; className: string; }) => {
  return (
    <div className={`header ${className}`}>
      <Link href={"/"} className={"md:flex-1"}>
        <Image src={"/icons/Logo.jpeg"} alt='Logo with name' width={32} height={32} 
          className='hidden md:block w-32 h-32 rounded-full'/>

        <Image src={"/icons/Logo.jpeg"} alt='Logo' width={32} height={32} 
          className='hidden md:block rounded-full'/>
      </Link>
      {children}
    </div>
  )
}

export default Header
