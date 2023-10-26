
import prismadb from '@/lib/prismadb';
import PageClient from './page-client';
import { useSession } from 'next-auth/react';
import Image from 'next/image'

export default function Home() {
  // // const user = await prismadb.user.count();
  // const user = useSession();

  // console.log("User: ", user);
  
  return (
    <>
      <div className='w-full h-screen'>
        <div className='flex flex-col items-center justify-center h-full'>
          <h1 className='text-2xl text-slate-200 font-extrabold tracking-tight lg:text-3xl'>Be yourself. Be others. Be me</h1>
        <div className='absolute bottom-10 flex flex-row items-center justify-center gap-9'>
          <PageClient />
        </div>
        </div>
      </div>
      <Image
        src={'/map-dots.png'}
        alt=''
        fill
        className='absolute -z-10 top-0 h-screen object-cover'
      />
    </>
  )
}
