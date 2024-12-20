import type { Metadata } from "next";
import "./globals.css";
import StyledComponentsRegistry from "./registry";
import { Poppins } from 'next/font/google'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AppProvider from "@/context";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

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
      <body className={`${poppins.className}`}>
        <StyledComponentsRegistry>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <AppProvider>
            <Header />
            <main className="main">
              {children}
            </main>
            <Footer />
          </AppProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}