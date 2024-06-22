import { Inter, Montserrat } from "next/font/google";
import type { Metadata } from "next";
import Layout from "./components/layout";
import Head from "./header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "After Bootcamp",
  description: "Grow your career with After Bootcamp",
};
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
