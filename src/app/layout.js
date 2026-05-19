import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Petopia | Pet Adoption Platform",
  description:
    "Petopia is a modern pet adoption platform where users can discover, adopt, and give loving homes to pets including dogs, cats, birds, and more. Find your perfect companion today.",
};
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar></Navbar>
        <main>
          {children}
          <ToastContainer position="top-right" autoClose={3000} />
        </main>
        <Footer></Footer>
      </body>
    </html>
  );
}
