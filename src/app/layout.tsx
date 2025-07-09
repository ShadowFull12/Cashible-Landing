import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'Cashible - Modern Finance Tracker for India',
  description: 'Take control of your finances with Cashible, the ultimate modern finance tracking app designed for India. Manage expenses, create budgets, and achieve your financial goals with ease. Sign up today!',
  keywords: 'Cashible, finance tracker, budget app, expense manager, personal finance India, money management, financial goals, savings app',
  icons: {
    icon: 'https://i.postimg.cc/GhKqC9zp/cashible-logo.png',
  },
  openGraph: {
    title: 'Cashible - Modern Finance Tracker for India',
    description: 'The ultimate modern finance tracking app designed for India. Manage expenses, create budgets, and achieve your financial goals with ease.',
    images: [{ url: 'https://i.postimg.cc/GhKqC9zp/cashible-logo.png' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cashible - Modern Finance Tracker for India',
    description: 'The ultimate modern finance tracking app designed for India. Manage expenses, create budgets, and achieve your financial goals with ease.',
    images: ['https://i.postimg.cc/GhKqC9zp/cashible-logo.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
