import GlobalStyle from "../styles";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Major+Mono+Display&family=Special+Elite&display=swap"
          rel="stylesheet"
        />
        <title>Capstone Project</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
