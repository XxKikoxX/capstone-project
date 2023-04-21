import GlobalStyle from "../styles";
import Head from "next/head";
import useLocalStorageState from "use-local-storage-state";
import Navbar from "../components/Navbar";

export default function App({ Component, pageProps }) {
  const [checkins, setCheckins] = useLocalStorageState("checkinData", {
    defaultValue: [],
  });

  function handleCheckins(checkinData) {
    setCheckins((prev) => {
      return [...prev, checkinData];
    });
  }

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <Component
        {...pageProps}
        checkins={checkins}
        handleCheckins={handleCheckins}
      />
      <Navbar />
    </>
  );
}
