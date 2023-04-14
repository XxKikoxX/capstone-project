import { useRouter } from "next/router";
import DataObject_1 from "../../components/Data_1";
import DataObject_2 from "../../components/Data_2";
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
      <DataObject_1 checkinTime={checkinTime} location={location} />
      <DataObject_2 location={location} />
      <CheckoutButton />
    </>
  );
}
