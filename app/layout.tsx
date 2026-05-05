import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Invoice Dunning — Automate Polite Payment Reminder Sequences',
  description: 'Automated escalating payment reminders with customizable templates and timing. Built for freelancers and small agencies.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="628ce155-3bd4-49d3-bc9e-f0328087d6ee"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
