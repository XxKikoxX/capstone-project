import GlobalStyle from "../styles";
import Head from "next/head";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  const [checkinTime, setCheckinTime] = useLocalStorageState("time");
  const [checkins, setCheckins] = useLocalStorageState([]);
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
        checkins={checkins}
        setCheckins={setCheckins}
      />
    </>
  );
}
