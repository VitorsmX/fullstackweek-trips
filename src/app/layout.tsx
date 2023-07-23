import { NextAuthProvider } from '@/providers/auth'
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from "next/font/google"
import Header from '../components/header'

const poppins = Poppins({ subsets: ["latin"], weight: [
  '400',
  '500',
  '600',
  '700',
  '800',
  '900'
] })

export const metadata: Metadata = {
  title: 'FSW trips',
  description: 'Sistema de Reserva de viagens TOP!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}><NextAuthProvider>
          <Header />

          {children}
        </NextAuthProvider></body>
    </html>
  )
}
