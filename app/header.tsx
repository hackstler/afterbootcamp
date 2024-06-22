"use client";
import Head from "next/head";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { useEffect } from "react";

/**
 * Renders the custom head component for the After Bootcamp application.
 * This component sets the title, meta tags, and Open Graph tags for the page.
 * @returns The custom head component.
 */

const GA_TRACKING_ID = "G-LMZ1RWB8J4"; // Reemplaza con tu ID de seguimiento
export default function CustomHead() {
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

  const metaTitle = "After Bootcamp";
  const metaDescription = "Grow your career with After Bootcamp";
  const metaImage =
    "https://storage.googleapis.com/afterbootcamp/openart-image_Zssjbb-I_1716376231201_raw.png";
  const metaUrl = "https://www.afterbootcamp.es/";

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta
          name='keywords'
          content='bootcamp, career growth, software development, devops, after bootcamp, afterbootcamp, afterbootcamp.es, seniority, developer, software engineer, software architect, tech lead, cto, career path, career development, career growth'
        />
        <meta name='author' content='After Bootcamp' />

        {/* Open Graph / Facebook */}
        <meta property='og:title' content={metaTitle} />
        <meta property='og:description' content={metaDescription} />
        <meta property='og:image' content={metaImage} />
        <meta property='og:url' content={metaUrl} />
        <meta property='og:type' content='website' />

        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta property='twitter:domain' content='afterbootcamp.es' />
        <meta property='twitter:url' content={metaUrl} />
        <meta name='twitter:title' content={metaTitle} />
        <meta name='twitter:description' content={metaDescription} />
        <meta name='twitter:image' content={metaImage} />

        {/* LinkedIn */}
        <meta property='og:title' content={metaTitle} />
        <meta property='og:description' content={metaDescription} />
        <meta property='og:image' content={metaImage} />
        <meta property='og:url' content={metaUrl} />

        {/* WhatsApp */}
        <meta property='og:title' content={metaTitle} />
        <meta property='og:description' content={metaDescription} />
        <meta property='og:image' content={metaImage} />
        <meta property='og:url' content={metaUrl} />

        {/* Instagram */}
        <meta property='og:title' content={metaTitle} />
        <meta property='og:description' content={metaDescription} />
        <meta property='og:image' content={metaImage} />
        <meta property='og:url' content={metaUrl} />

        {/* Discord */}
        <meta property='og:title' content={metaTitle} />
        <meta property='og:description' content={metaDescription} />
        <meta property='og:image' content={metaImage} />
        <meta property='og:url' content={metaUrl} />

        {/* Additional Meta Tags for WhatsApp */}
        <meta name='og:image:width' content='1200' />
        <meta name='og:image:height' content='630' />

        {/* Additional Meta Tags for Discord */}
        <meta name='theme-color' content='#ffffff' />
        <meta name='twitter:image:alt' content='After Bootcamp Logo' />
      </Head>
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
    </>
  );
}
