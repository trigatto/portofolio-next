import './globals.css'
import "./page.module.css"

import Head from './head.jsx'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Head />
      </head>
      <body>{children}</body>
    </html>
  );
}
