import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      <div className='flex flex-row items-center justify-center gap-9'>
        <Button className='bg-violet-500'>Become a user</Button>
        <Button className='bg-violet-500'>Become a streamer</Button>
      </div>      
    </div>
  )
}
