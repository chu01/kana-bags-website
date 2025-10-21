import './globals.css'

export const metadata = {
  title: 'KanaBags LLC | Eco-Friendly Paper Products',
  description: 'KanaBags LLC - Sustainable paper bags and cups manufacturer committed to environmental protection',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}