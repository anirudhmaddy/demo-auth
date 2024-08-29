import type { Metadata } from "next";
import "./globals.css";
// import NextAuthProvider from './components/SessionProvider'

import { Inter, Roboto, Poppins, Montserrat, Arima, Fira_Code, DM_Sans, Patrick_Hand, Ubuntu } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter', weight: ['400', '500'], display: 'swap' });
const roboto = Roboto({ subsets: ["latin"], variable: '--font-roboto', weight: ['400', '500'], display: 'swap' });
const poppins = Poppins({ subsets: ["latin"], variable: '--font-poppins', weight: ['400', '500', '600', '700', '800', '900'], display: 'swap' });
const montserrat = Montserrat({ subsets: ["latin"], variable: '--font-montserrat', weight: ['400', '500', '600', '700', '800', '900'], display: 'swap' });
const dmsans = DM_Sans({ subsets: ["latin"], variable: '--font-dmsans', weight: ['400', '500', '700', '800', '900'], display: 'swap' });
const ubuntu = Ubuntu({ subsets: ["latin"], variable: '--font-ubuntu', weight: ['400', '500', '700'], display: 'swap' });
const arima = Arima({ subsets: ["latin"], variable: '--font-arima', weight: ['400', '500', '700'], display: 'swap' });

export const metadata: Metadata = {
  title: "Agents UI Framework",
  description: "Agents UI Framework",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${inter.variable} ${arima.variable} ${poppins.variable} ${roboto.variable} ${dmsans.variable} ${ubuntu.variable} font-inter`}> 
        {children}
      </body>
    </html>
  );
}
