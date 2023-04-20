import GlobalStyle from "../styles";
import Head from "next/head";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  /* const [checkinTime, setCheckinTime] = useLocalStorageState("time"); */
  const [checkins, setCheckins] = useLocalStorageState("checkinData", {
    defaultValue: [],
  });

  function handleCheckins(checkinData) {
    setCheckins((prev) => {
      return [...prev, checkinData];
    });
  }

  /*  function handleCheckinTime(time) {
    setCheckinTime(time);
  } */

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <Component
        {...pageProps}
        /* checkinTime={checkinTime} */
        /* handleCheckinTime={handleCheckinTime} */
        checkins={checkins}
        handleCheckins={handleCheckins}
      />
    </>
  );
}
