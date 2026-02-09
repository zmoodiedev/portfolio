import { Open_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

const thunder = localFont({
  src: [
    {
      path: "../src/assets/fonts/Thunder-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../src/assets/fonts/Thunder-ExtraBold.woff",
      weight: "800",
      style: "normal",
    },
    {
      path: "../src/assets/fonts/Thunder-Black.woff",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-thunder",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.zachmoodie.com"),
  title: "Zach Moodie | Full-Stack Web Developer",
  description:
    "The personal and professional portfolio of Full-Stack Web Developer Zach Moodie.",
  openGraph: {
    type: "website",
    siteName: "Zach Moodie",
    locale: "en_US",
    url: "https://www.zachmoodie.com",
    images: ["/zmoodie256.jpg"],
    title: "Zach Moodie | Full-Stack Web Developer",
    description:
      "The personal and professional portfolio of Full-Stack Web Developer Zach Moodie.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${openSans.variable} ${thunder.variable}`}>
      <head />
      <body>
        {children}
      </body>
    </html>
  );
}
