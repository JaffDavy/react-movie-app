import { Inter } from "next/font/google"
import "./app.css"
import App from "./App"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "StreamX - Watch Movies & TV Shows",
  description: "Stream your favorite movies and TV shows",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <App />
      </body>
    </html>
  )
}

