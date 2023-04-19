import CheckIn from "./checkin";

export default function Home({ handleCheckins, handleCheckinTime, checkinTime }) {
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
