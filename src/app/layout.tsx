import type { Metadata } from 'next'
import '../../public/globals.css'
import { Providers }from './providers/providers'
import { fonts } from '../lib/fonts'

export const metadata: Metadata = {
  title: 'Lycooper',
  description: 'Sistema!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={fonts.poppins.variable}>
      <body className="flex flex-col min-h-screen font-poppins relative">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
