"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Inter, Montserrat } from "next/font/google";
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
      <head>
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
        <meta property='og:image' content='/app/favicon.ico' />
        <meta property='og:url' content='https://afterbootcamp.es' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='After Bootcamp' />
        <meta
          name='twitter:description'
          content='Grow your career with After Bootcamp'
        />
      </head>
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
