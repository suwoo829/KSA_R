import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";
import AnimatedCursor from "react-animated-cursor";
import BackgroundCircles from "@/components/BackgroundCircles";

const font = Sora({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KSA 후보 1번",
  description: "KSA 후보 1번",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="custom-scrollbar">
      <body className={font.className}>
        {/* Background placed first in the DOM but will appear behind due to z-index */}
        <BackgroundCircles />

        {/* Main content wrapper with higher z-index */}
        <div className="content-wrapper min-h-screen flex flex-col">
          <div className="hidden md:block">
            <AnimatedCursor
              innerSize={8}
              outerSize={35}
              innerScale={2}
              outerScale={2}
              outerAlpha={0}
              innerStyle={{
                backgroundColor: "white",
              }}
              outerStyle={{
                border: "3px solid white",
              }}
            />
          </div>
          <ResponsiveNav />
          <div className="flex-grow">{children}</div>
          <Footer />
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}
