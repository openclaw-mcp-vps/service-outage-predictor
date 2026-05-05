import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Service Outage Predictor — Predict Cloud Outages Before They Happen',
  description: 'ML-powered early warning system for cloud service disruptions using social signals. Get 15-30 minutes advance notice before official outage announcements.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="db1637e5-332e-4f3e-9657-671fd4d85dc3"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
