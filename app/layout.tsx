import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'
import ModalProvider from '@/providers/modal-provider'
import { Toaster } from '@/components/ui/toaster'
import getCurrentUser from '@/actions/get-current-user'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Becomme Limitless',
  description: 'Wondering the world has no limits',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await getCurrentUser();
  console.log("Current User: ", user)

  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Navbar user={user} />
        <div className=''>
          {children}
          {/* <video className='absolute -z-10 top-0 h-screen object-cover blur-sm' autoPlay loop muted>
            <source src={'/map.mp4'} type='video/mp4' />
          </video> */}
          <Image
            src={'/map-dots.png'}
            alt=''
            fill
            className='absolute -z-10 top-0 h-screen object-cover'
          />
        </div>
        <ModalProvider />
        <Toaster />
      </body>
    </html>
  )
}
