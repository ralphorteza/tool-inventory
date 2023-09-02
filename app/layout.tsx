import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { GlobalNav } from '../ui/global-nav'
// import { GlobalNav } from '@/ui/global-nav'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='bg-gray-400'>
      <body className='overflow-y-scroll bg-white pb-36'>
      <GlobalNav />
        <div className='lg:pl-72'>
          
          <div className='mx-auto max-w-4xl space-y-8 bg-blue-500 px-2 pt-20 pb-4 lg:px-8 lg:py-8'>
            <div className='bg-vc-border-gradient rounded-lg p-px shadow-lg shadow-black/20'>
              <div className='rounded-lg bg-black'>
                {/* <AddressBar /> */}
                <div className='p-2 bg-white rounded-lg'></div> {/* temp dummy for address bar */}
              </div>
            </div>

            <div className='bg-vc-border-gradient rounded-lg p-px shadow-lg shadow-black/20'>
              <div className='rounded-lg bg-white p-3.5 lg:p-6'>{children}</div>
            </div>

          </div>
        </div>
      </body>
    </html>
  )
}