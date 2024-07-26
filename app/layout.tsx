import { Providers } from '@/components/providers'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Toast } from 'ui'

import './globals.css'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans'
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono'
})

export const metadata: Metadata = {
  title: {
    template: '%s / Next Starter Kit',
    default: 'Next Starter Kit'
  },
  description:
    'Next.js 14 Starter Kit with Tailwind CSS, TypeScript, React, React Aria Components, Justd Components, Framer Motion, and more.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-svh bg-tertiary font-sans`}>
        <Toast />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
