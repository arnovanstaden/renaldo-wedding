import '@styles/global.scss'
import { Bodoni_Moda } from 'next/font/google'

const inter = Bodoni_Moda(
  {
    subsets: ['latin'],
    style: ['normal', 'italic'],
    display: 'swap',
    variable: '--font',
  }
);

export const metadata = {
  title: 'Renaldo & Maryanke',
  description: 'Renaldo & Maryanke\'s special day.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
