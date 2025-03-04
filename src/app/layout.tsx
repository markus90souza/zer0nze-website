import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "@/styles/globals.css";
import type { FC, ReactNode } from "react";


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
        {children}
      </body>
    </html>
  );
}

export default RootLayout