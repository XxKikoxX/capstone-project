import CheckIn from "./checkin";

export default function Home({setCheckins,setCheckinTime, checkinTime}) {
  return (
    <>
      <CheckIn setCheckins={setCheckins} setCheckinTime={setCheckinTime} checkinTime={checkinTime}/>
    </>
  );
}
