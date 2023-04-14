import GlobalStyle from "../styles";
import Head from "next/head";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [checkinTime, setCheckinTime] = useState("");
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <Component
        {...pageProps}
        checkinTime={checkinTime}
        setCheckinTime={setCheckinTime}
      />
    </>
  );
}
