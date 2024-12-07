import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./CommonComponents/NavBar/Navbar";
import Footer from "./CommonComponents/Footer/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Taurus Space",
  description: "Where Strength meets the stars",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
     <NavBar /> 
{children}
<Footer />
</body>

    </html>
  );
}
