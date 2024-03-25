import { Inter } from "next/font/google";
import "./globals.css";
// import WellComeLogo from "../public/image/img.svg";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Welcome Decorator",
  description:
    "Welcome to Welcome Decoration, where beauty meets functionality",
  ogTitle: "Your Story is Ours",
  ogImage: "../public/image/img.svg",
  ogUrl: "https://welcome-decoration.vercel.app",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.ogTitle} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.ogImage} />
        <meta property="og:url" content={metadata.ogUrl} />
      </Head>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </>
  );
}
