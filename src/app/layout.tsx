import  { type Metadata } from 'next'
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "@/styles/globals.css";
import type { FC, ReactNode } from "react";
import Script from 'next/script';
import { POSTHOGProvider } from '@/providers/posthog';
import { Navbar } from '@/components/navbar';


const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zer0nze | Digital Agência",
  description: "Zer0nze | Digital Agência",
};

type RootLayoutProps = {
  children: ReactNode
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="pt-BR">
      <body
        className={`${spaceGrotesk.variable} antialiased`}
      >
       
          <Navbar />
          {children}
       
      </body>
      <Script defer src="https://cloud.umami.is/script.js" data-website-id="548b2c8e-8439-46d5-8563-ff7d142e025d" />
    </html>
  );
}

export default RootLayout