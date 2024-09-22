import StatsDisplayer from '@/components/StatsDisplayer';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import React from 'react'

async function pointsFn(user_id: string): Promise<number> {
  const response = await fetch(`https://backend-production-c8e4.up.railway.app/user/points/${user_id}`);
  return response.json();
}


const page = async () => {
  const clerkUser = await currentUser();
  if (!clerkUser) {
    redirect("sign-in");
  }

  const points = await pointsFn(clerkUser.id);

  return (
    <div className='flex items-center'>
      <StatsDisplayer points={points}/>
    </div>
  )
}

export default page
