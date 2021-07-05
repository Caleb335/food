import Head from "next/head";
import React from "react";
import "../styles/globals.css";
import "../styles/variables.css";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>Home | Foodies</title>
        <meta name="theme-color" content="rgb(243, 141, 32)" />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
