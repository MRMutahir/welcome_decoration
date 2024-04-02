import Head from "next/head";
import Main from "./components/Main.jsx";
import ogimg from "../public/image/img.png";
export const metadata = {
  title: "Welcome Decorator",
  description:
    "Welcome to Welcome Decoration, where beauty meets functionality",
  ogTitle: "Your Story is Ours",
  ogImage: ogimg,
  ogUrl: "https://welcome-decoration.vercel.app",
};
export default function Home() {
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
      <Main />
    </>
  );
}
