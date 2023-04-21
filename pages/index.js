import CheckIn from "./checkin";
import Navbar from "../components/Navbar";
import Link from "next/link";

export default function Home({
  handleCheckins,
  handleCheckinTime,
  checkinTime,
}) {
  return (
    <>
      <CheckIn
        handleCheckins={handleCheckins}
        handleCheckinTime={handleCheckinTime}
        checkinTime={checkinTime}
      />
    </>
  );
}
