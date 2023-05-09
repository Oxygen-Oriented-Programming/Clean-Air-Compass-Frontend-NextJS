import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" type="image/png" href="/icon.png" />
        <meta property="og:title" content="Clean Air Compass"/>
        <meta name="twitter:title" content="Clean Air Compass" />
        <meta name="keywords" content="Purple Air, Purple Air Senors, AQI, Air Quality, Air Quality Alerts, Air Quality Notifications" />
        <meta
          property="og:description"
          content="Clean Air Compass is a mapping interface and alert system for data from the open Purple Air network of citizen-run air quality sensors."
        />
        <meta
          name="description"
          content="Clean Air Compass is a mapping interface and alert system for data from the open Purple Air network of citizen-run air quality sensors."
        />
      </Head>
      <body>
        <div id="modals" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
