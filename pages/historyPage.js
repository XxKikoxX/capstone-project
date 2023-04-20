import styled from "styled-components";
import Link from "next/link";

export default function HistoryPage({ checkins, checkinData }) {
  console.log(checkins);
  return (
    <>
      {checkins.length > 0 ? (
        checkins.map((checkinData) => {
          return (
            <StyledSection key={checkinData.id}>
              <ul>
                <li>Bügel-Id: {checkinData.id}</li>
                <li>Checkin: {checkinData.checkin_Time} Uhr</li>
                <li>Lokal: {checkinData.name}</li>
                <li>Stadt: {checkinData.stadt}</li>
              </ul>
            </StyledSection>
          );
        })
      ) : (
        <p key="1">Upps...du hast wohl noch keine checkins!!!</p>
      )}
      <Link href="/">Zurück</Link>
    </>
  );
}

const StyledSection = styled.section`
  border: 2px solid black;
  border-radius: 20px;
  padding: 25px;
  background-color: rgba(155, 225, 219, 0.8);
  margin: 25px;
  box-shadow: 20px 15px 16px black;
  border-radius: 20px;
  border: 2px solid black;
  border-radius: 20px;
`;
