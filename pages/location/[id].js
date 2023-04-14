import { useRouter } from "next/router";
import Information from "../../components/Information";
import Dog_Tag from "../../components/Dog_Tag";
import { locations } from "../../db/data";
import CheckoutButton from "../../components/CheckOutButton";

export default function InformationPage({ checkinTime }) {
  const router = useRouter();

  if (!router.isReady) {
    return <h2>Loading...</h2>;
  }
  const { id } = router.query;
  const location = locations.find((location) => location.id === id);

  return (
    <>
      <Information checkinTime={checkinTime} location={location} />
      <Dog_Tag location={location} />
      <CheckoutButton />
    </>
  );
}
