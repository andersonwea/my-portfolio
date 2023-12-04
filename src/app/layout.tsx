import type { Metadata } from 'next'
import { Poppins, Lora } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const poppins = Poppins({ weight: ['400', '700'], variable: '--font-poppins' })
const lora = Lora({ weight: ['400', '700'], variable: '--font-lora' })

export const metadata: Metadata = {
  title: 'AndersonWea',
  description: 'Portfolio de andersonwea',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Providers>
        <body className={`${poppins.variable} ${lora.variable}`}>
          {children}
        </body>
      </Providers>
    </html>
  )
}
