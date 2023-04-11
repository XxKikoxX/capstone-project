import { useRouter } from "next/router";
import DataObject_1 from "../../components/Data_1";
import DataObject_2 from "../../components/Data_2";
import { locations } from "../../db/data";

export default function InformationPage() {
  const router = useRouter();

  if (!router.isReady) {
    return <h2>Loading...</h2>;
  }
  const { id } = router.query;
  const location = locations.find((location) => location.id === id);

  return (
    <>
      <DataObject_1 location={location} />
      <DataObject_2 location={location} />
    </>
  );
}
