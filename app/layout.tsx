import { Inter, Montserrat } from "next/font/google";
import type { Metadata } from "next";
import Layout from "./components/layout";
import Head from "./head";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <Head />
      <Layout>
        <body className={montserrat.className}>{children}</body>
      </Layout>
    </html>
  );
}
