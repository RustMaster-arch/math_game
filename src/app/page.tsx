import Card from '@/components/Card';
import Header from '@/components/Header';
import LeaderBoard from '@/components/LeaderBoard';
import NavBar from '@/sections/NavBar';
import { SignedIn, UserButton } from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import React from 'react'

const Home = async () => {
  const clerkUser = await currentUser();
  if (!clerkUser) redirect("/sign-in")

  return (
    <div className='text-center'>
      <div>
        <Header className='sticky left-0 top-0'>
          <div className='flex items-center gap-2 lg:gap-4'>
            <SignedIn>
              <UserButton/>
            </SignedIn>
          </div>
        </Header>
      </div>

      <div className='w-full text-center'>
        <h1 className='text-white font-bold m-3 text-4xl'>Welcome to MathGame!</h1>

        <NavBar/>
        <div className='flex flex-col xs:grid xs:grid-cols-2 xs:grid-rows-[auto_auto_auto]
          mxl:grid-cols-4 mxl:grid-rows-[auto_auto_auto] gap-x-3'>

          <LeaderBoard/>

          <Card 
            difficulty='Easy'
            description='Easy math build foundational skills, enhance mental agility, and boost confidence, assisting with daily calculations and improving problem-solving.'
            diffClass='easy'
            className='mxl:border-none hxl:[grid-column:3/4] hxl:[grid-row:1/2]'
            hideDescription
          />

          <Card 
            difficulty='Medium'
            description='Medium math boost your understanding, develop critical thinking, and enhance problem-solving skills, preparing you for advanced real-world applications.'
            diffClass='medium'
            className='xs:border-r-black mxl:border-none hxl:[grid-column:3/4] hxl:[grid-row:2/3'
            hideDescription
          />

          <Card 
            difficulty='Hard'
            description='Hard math questions push your understanding, enhance problem-solving skills, and build resilience, preparing you for complex real-world challenges.'
            diffClass='hard'
            className='mxl:[grid-column:1/3] mxl:border-none hxl:[grid-column:4/5] hxl:[grid-row:1/2]'
          />

          <Card 
            difficulty='Very hard'
            description='Very hard math challenges your understanding, develop problem-solving skills, and build resilience, preparing you for complex, cutting-edge challenges.'
            diffClass='very_hard'
            className='xs:border-r-black mxl:[grid-column:3/5] mxl:border-none hxl:[grid-column:4/5] hxl:[grid-row:2/3]'
          />
        </div>
      </div>

    </div>
  )
}

export default Home 
