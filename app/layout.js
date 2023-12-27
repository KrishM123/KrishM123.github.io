import './globals.css'

export const metadata = {
  title: 'Krish Modi',
  description: 'kmodi\'s portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
