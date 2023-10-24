import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
      <div className='flex flex-row items-center justify-center gap-9 w-full h-screen'>
        <Button className='bg-gradient-to-r from-violet-800 to-violet-400'>Become a user</Button>
        <Button className='bg-violet-300 text-slate-600'>Become a streamer</Button>
      </div>      
  )
}
