"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Inter, Montserrat } from "next/font/google";
import Head from "./head";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

const GA_TRACKING_ID = "G-LMZ1RWB8J4"; // Reemplaza con tu ID de seguimiento

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (window.gtag) {
        window.gtag("config", GA_TRACKING_ID, {
          page_path: url,
        });
      }
    };

    handleRouteChange(pathname); // Inicializar para la primera carga

    window.addEventListener("popstate", () =>
      handleRouteChange(window.location.pathname)
    );

    return () => {
      window.removeEventListener("popstate", () =>
        handleRouteChange(window.location.pathname)
      );
    };
  }, [pathname]);

  return (
    <html lang='en'>
      <Head />
      <body className={montserrat.className}>
        {children}
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <Script
          id='gtag-init'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
