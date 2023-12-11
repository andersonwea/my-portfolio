import type { Metadata } from 'next'
import { Poppins, Lora, Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { CopyRight } from './components/CopyRight'
import { Notification } from './components/Notification'
import 'react-toastify/dist/ReactToastify.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-poppins',
})

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lora',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'AndersonWea | Portfolio',
  description: 'Portfolio de andersonwea',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${lora.variable} ${inter.variable} bg-bg-primary font-primary`}
      >
        <Providers>
          <Notification />
          <Header />
          <div className="max-w-[1232px] mx-auto">{children}</div>
          <Footer />
          <CopyRight />
        </Providers>
      </body>
    </html>
  )
}
