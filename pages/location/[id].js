import { useRouter } from "next/router";
import Information from "../../components/Information";
import Dog_Tag from "../../components/Dog_Tag";
import { locations } from "../../db/data";
import CheckoutButton from "../../components/CheckoutButton";
import Link from "next/link";

export default function InformationPage({ checkinTime, checkins }) {
  const router = useRouter();

  if (!router.isReady) {
    return <h2>Loading...</h2>;
  }
  const { id } = router.query;
  const location = locations.find((location) => location.id === id);

  return (
    <>
      {/* <Link href="/historyPage">HistoryPage</Link> */}
      <Information
        checkinTime={checkinTime}
        checkins={checkins}
        location={location}
      />
      <Dog_Tag location={location} />
      <CheckoutButton />
    </>
  );
}
