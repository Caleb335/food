import Head from "next/head";
import React from "react";
import "../styles/globals.css";
import "../styles/variables.css";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>Home | Foodies</title>
        <meta name="theme-color" content="#000" />
        <link rel="icon" href="/diet.png" />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
