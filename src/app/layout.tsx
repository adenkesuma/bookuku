import './globals.css'
import { Inter } from 'next/font/google'
import Chat from '@/components/ui/chat'
import Provider from '@/components/ui/providers'

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
          {children}
        </body>
      </Provider>
    </html>
  )
}
