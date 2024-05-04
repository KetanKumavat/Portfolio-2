// import { Inter } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Toggler from "./components/Toggler";
import Linker from "./components/Linker";
import Greeting from "./components/Greeting";

// const inter = Inter({ subsets: ["latin"] });
const space = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "Ketan - Portfolio",
  description: "Portfolio of Ketan, a Fullstack Developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={space.className}>
        <Toggler />
        <Linker />
        <Greeting />
        {children}
      </body>
    </html>
  );
}
