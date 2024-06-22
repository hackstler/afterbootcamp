import Head from "next/head";

/**
 * Renders the custom head component for the After Bootcamp application.
 * This component sets the title, meta tags, and Open Graph tags for the page.
 * @returns The custom head component.
 */
export default function CustomHead() {
  return (
    <Head>
      <title>After Bootcamp</title>
      <meta charSet='UTF-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta
        name='keywords'
        content='bootcamp, career growth, software development, devops, after bootcamp, afterbootcamp, afterbootcamp.es, seniority, developer, software engineer, software architect, tech lead, cto, career path, career development, career growth'
      />
      <meta name='author' content='After Bootcamp' />
      <meta property='og:title' content='After Bootcamp' />
      <meta
        property='og:description'
        content='Grow your career with After Bootcamp'
      />
      {/* <meta property='og:image' content='/app/favicon.ico' /> */}
      <meta property='og:url' content='https://www.afterbootcamp.es/' />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content='After Bootcamp' />
      <meta
        name='twitter:description'
        content='Grow your career with After Bootcamp'
      />
    </Head>
  );
}
