import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "After Bootcamp",
  description: "Grow your career with After Bootcamp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <Head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta
          name='keywords'
          content='bootcamp, career growth, software development, devops'
        />
        <meta name='author' content='After Bootcamp' />
        <meta property='og:title' content='After Bootcamp' />
        <meta
          property='og:description'
          content='Grow your career with After Bootcamp'
        />
        <meta property='og:image' content='/path/to/image.jpg' />
        <meta property='og:url' content='https://www.afterbootcamp.com' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='After Bootcamp' />
        <meta
          name='twitter:description'
          content='Grow your career with After Bootcamp'
        />
        {/* <meta name='twitter:image' content='/path/to/image.jpg' /> */}
      </Head>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
