import { Inter, Montserrat } from "next/font/google";
import type { Metadata } from "next";
import Layout from "./components/layout";
import Head from "./head";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Afterbootcamp",
  description: "Grow your career with After Bootcamp",
  keywords: [
    "bootcamp",
    "career growth",
    "software development",
    "devops",
    "after bootcamp",
    "afterbootcamp",
    "afterbootcamp.es",
    "seniority",
    "developer",
    "software engineer",
    "software architect",
    "tech lead",
    "cto",
    "career path",
    "career development",
    "career growth",
  ],
  openGraph: {
    title: "Afterbootcamp",
    description: "Grow your career with After Bootcamp",
    url: "https://afterbootcamp.es",
    type: "website",
    images: [
      "https://storage.googleapis.com/afterbootcamp/openart-image_Zssjbb-I_1716376231201_raw.png",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='es'>
      <Layout>
        <body className={montserrat.className}>{children}</body>
      </Layout>
    </html>
  );
}
