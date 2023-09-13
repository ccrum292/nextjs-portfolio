import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Caleb Crum Portfolio',
  description: "Hi, I'm Caleb Crum, a Full-Stack Web Developer and Instructor.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-slate-200 bg-slate-900`}>{children}</body>
    </html>
  )
}