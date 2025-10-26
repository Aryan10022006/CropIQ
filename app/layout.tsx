import '@mantine/core/styles.css';
import './global.css';
import React from 'react';
import { MantineProvider } from '@mantine/core';
import customTheme from './theme';

export const metadata = {
  metadataBase: new URL('https://yieldguard.vercel.app'),
  title: {
    default: 'YieldGuard - AI-Powered Crop Insurance Assessment Platform',
    template: '%s | YieldGuard'
  },
  description: 'Enterprise-grade PMFBY insurance assessment platform powered by AI, UAV surveillance, and IoT sensors for accurate crop damage analysis and fraud prevention.',
  keywords: ['crop insurance', 'PMFBY', 'AI assessment', 'UAV surveillance', 'IoT sensors', 'agriculture technology', 'crop monitoring', 'insurance claims'],
  authors: [{ name: 'YieldGuard Team' }],
  creator: 'YieldGuard',
  publisher: 'YieldGuard',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://yieldguard.vercel.app',
    title: 'YieldGuard - AI-Powered Crop Insurance Assessment',
    description: 'Enterprise-grade PMFBY insurance assessment platform with AI, UAV surveillance, and IoT sensors.',
    siteName: 'YieldGuard',
    images: [{
      url: '/images/logo.png',
      width: 1200,
      height: 630,
      alt: 'YieldGuard Platform',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YieldGuard - AI-Powered Crop Insurance Assessment',
    description: 'Enterprise-grade PMFBY insurance assessment platform with AI and UAV surveillance.',
    images: ['/images/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <meta name="theme-color" content="#2563eb" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        <MantineProvider theme={customTheme} defaultColorScheme="light">
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
