import Image from "next/image";
import styled from "styled-components";
import { useRouter } from "next/router";
import { locations } from "../db/data";
import { localStorage } from "../db/localStorage";
import IsValidId from "../components/Valid_Id";

export default function CheckIn({
  newCheckin,
  handleCheckins,
  checkinTime,
  handleCheckinTime,
  checkinData,
  id,
}) {
  const router = useRouter();
  function handleCheckIn(event) {
    event.preventDefault();

    const input = event.target.elements.IdInput.value;

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    if (IsValidId(input)) {
      const time = new Date()
        .toLocaleTimeString()
        .split(":")
        .slice(0, 2)
        .join(":");
      handleCheckinTime(time);

      const checkinData = {
        id: data.id,
        checkin_Time: time,
        name: locations.find((location) => location.id === data.id).name,
      };
      handleCheckins([newCheckin]);

      localStorage.push(checkinData);
      router.push(`/location/${data.id}`);
    } else {
      alert(
        "Uppss...Da ist etwas schiefgegangen. Wir kennen die von dir eingegebene ID nicht, bitte schaue noch einmal auf deinem Bügel, dort sollte sich eine 6-stellige ID befinden. Falls nicht, wende dich bitte an das Personal."
      );
    }
  }

  return (
    <>
      <ImageWrapper>
        <Image
          src="/Logo.png"
          height={200}
          width={290}
          alt="A Picture of a Hanger with Text around"
          priority="high"
        />
      </ImageWrapper>

      <StyledForm onSubmit={handleCheckIn}>
        <NumberInputWrapper>
          <label htmlFor="IdInput">Bügel-Id/QR-code</label>
          <input
            id="IdInput"
            type="number"
            name="id"
            placeholder="...z.b 567139"
          />
        </NumberInputWrapper>
        <StyledParagraph>
          Die Bügel-Id finden sie mittig auf dem Bügel.{`\n`}Es handelt sich um
          {`\n`}eine 6-stellige Zahlenabfolge
        </StyledParagraph>
        <StyledButton type="submit">CHECK-IN</StyledButton>
      </StyledForm>
    </>
  );
}

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  color: #3a2622;
`;

export const ImageWrapper = styled.section`
  border: 2px solid black;
  border-color: grey black black grey;
  border-radius: 20px;
  margin: 30px;
  box-shadow: 20px 15px 16px black;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
  background-color: rgba(155, 225, 219, 0.8);
`;

export const StyledButton = styled.button`
  box-shadow: 20px 15px 16px black;
  border-radius: 10px;
  padding: 10px;
  background-color: rgba(155, 225, 219, 0.8);
  font-weight: bold;
`;

export const NumberInputWrapper = styled.section`
  box-shadow: 20px 15px 16px black;
  border: 2px solid black;
  border-color: grey black black grey;
  background-color: rgba(155, 225, 219, 0.8);
  border-radius: 10px;
  padding: 20px;
  input {
    border: none;
    border-bottom: 2px solid black;
    background: none;
  }
  width: 13rem;
  text-align: center;
  font-weight: bold;
`;

export const StyledParagraph = styled.p`
  background-color: rgba(155, 225, 219, 0.8);
  border: 2px solid black;
  border-color: grey black black grey;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  box-shadow: 20px 15px 16px black;
  margin: 25px;
  font-weight: 500;
  font-size: 10.5px;
  height: 4rem;
  width: 12rem;
  font-weight: bold;
  color: #363636;
`;
