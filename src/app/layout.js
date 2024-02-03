import { Inter } from "next/font/google";
import "./globals.css";
import Toggler from "./components/Toggler";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ketan Kumavat",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toggler />
        {children}
      </body>
    </html>
  );
}
