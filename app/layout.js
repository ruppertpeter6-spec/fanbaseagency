import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata = {
  title: 'The Fanbase Agency | Direct-to-Fan Growth',
  description:
    'The Fanbase Agency helps music artists build thriving direct-to-fan ecosystems with strategy, technology, and fan experiences that scale.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} page-shell`}>{children}</body>
    </html>
  )
}
