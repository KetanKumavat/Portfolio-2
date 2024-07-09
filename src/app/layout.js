import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Toggler from "./components/Toggler";
import Linker from "./components/Linker";
import Greeting from "./components/Greeting";
import StarsCanvas from "./components/ui/Background";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const space = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "Ketan - Portfolio",
  description: "Portfolio of Ketan Kumavat, a Fullstack Developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={space.className}>
        <StarsCanvas
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: -1,
            width: "100%",
            height: "100%",
          }}
        />
        <Toggler />
        <Linker />
        <Greeting />
        <SpeedInsights />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
