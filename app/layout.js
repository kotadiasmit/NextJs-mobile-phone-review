import { Inter } from "next/font/google";
import Navbar from "./navbar";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Smit's Phone Review (NextJs)",
  description: "Phone Review Full stack project with Next Js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
