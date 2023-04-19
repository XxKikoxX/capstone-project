import GlobalStyle from "../styles";
import Head from "next/head";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  const [checkinTime, setCheckinTime] = useLocalStorageState("time");
  const [checkins, setCheckins] = useLocalStorageState([]);

  function handleCheckins(someParameter) {
    setCheckins(someParameter);
  }

  function handleCheckinTime(time) {
    setCheckinTime(time);
  }

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <Component
        {...pageProps}
        checkinTime={checkinTime}
        handleCheckinTime={handleCheckinTime}
        checkins={checkins}
        handleCheckins={handleCheckins}
      />
    </>
  );
}
