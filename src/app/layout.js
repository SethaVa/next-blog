import { Header } from '@/components'
import "../styles/global.scss";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Setha Blogs',
  description: 'Made from love by me',
}

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./favicon.ico"/>
      </head>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
