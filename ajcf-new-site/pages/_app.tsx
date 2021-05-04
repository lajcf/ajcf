import "../styles/index.scss";
import { AppProps } from "next/app";
import React from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {process.env.NEXT_PUBLIC_ENV !== "prod" && (
        <Head>
          <meta name="robots" content="noindex" />
        </Head>
      )}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
