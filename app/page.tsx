
import prismadb from '@/lib/prismadb';
import PageClient from './page-client';
import { useSession } from 'next-auth/react';

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
          <button className="border-2 border-blue-700 text-white font-semibold p-3 bg-none hover:bg-blue-500 hover:bg-opacity-25 rounded-sm">
            Become a User
          </button> 
          <button className="border-2 border-blue-700 text-white font-semibold p-3 bg-none hover:bg-blue-500 hover:bg-opacity-25 rounded-sm">
            Become a Streamer
          </button> 
        </div>
        </div>
      </div>
    </>
  )
}
