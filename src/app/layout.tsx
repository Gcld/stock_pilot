import type { Metadata } from "next";
import "./globals.css";
import StyledComponentsRegistry from "./registry";
import { Poppins, Caveat } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const caveat = Caveat({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700']
})

export const metadata: Metadata = {
  title: "Study Page",
  description: "Project made to study css",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${caveat.className}`}>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}