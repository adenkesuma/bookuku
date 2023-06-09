import './globals.css'
import { Inter } from 'next/font/google'
import Chat from '@/components/chat'
import Provider from '@/components/providers'
import Navbar from '@/components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bookuku',
  description: 'Your bookstore for fantasy & mystery novels',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Provider>
        <body className={inter.className}>
          <Chat />
          <Navbar />
          {children}
        </body>
      </Provider>
    </html>
  )
}
