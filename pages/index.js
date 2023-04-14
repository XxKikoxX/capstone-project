import CheckIn from "./checkin";

export default function Home({setCheckinTime, checkinTime}) {
  return (
    <>
      <CheckIn setCheckinTime={setCheckinTime} checkinTime={checkinTime}/>
    </>
  );
}
