import Buttons from '@/components/Buttons';
import Header from '@/components/Header';
import LeaderBoard from '@/components/LeaderBoard';
import { SignedIn, UserButton } from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import React from 'react'

const Home = async () => {
  const clerkUser = await currentUser();
  if (!clerkUser) redirect("/sign-in")

  return (
    <>
      <Header className='sticky left-0 top-0'>
        <div className='flex items-center gap-2 lg:gap-4'>
          <SignedIn>
            <UserButton/>
          </SignedIn>
        </div>
      </Header>

      <h1 className='pt text-4xl'>Welcome to MathGame!</h1>

      <div className='grid grid-cols-2 gap-4 text-center'>
        <h1 className='pt'>
          Leader Board
          <LeaderBoard/>
        </h1>
        <Buttons/>
      </div>
    </>
  )
}

export default Home 
