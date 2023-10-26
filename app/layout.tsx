import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'
import ModalProvider from '@/providers/modal-provider'
import { Toaster } from '@/components/ui/toaster'
import LayoutClient from '@/components/layout-client'
import { ThemeProvider } from '@/components/theme-provide'

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

  return (
    <html lang="en">
      <body className={`${inter.className} bg-black`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LayoutClient>
            <Navbar />
            <div className=''>
              {children}  
            </div>
            <ModalProvider />
            <Toaster />
          </LayoutClient>
        </ThemeProvider>
      </body>
    </html>
  )
}
