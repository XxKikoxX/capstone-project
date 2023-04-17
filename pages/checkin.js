import Image from "next/image";
import styled from "styled-components";
import { useRouter } from "next/router";
import { locations } from "../db/data";
import { localStorage } from "../db/localStorage";

export default function CheckIn({
  newCheckin,
  setCheckins,
  checkinTime,
  setCheckinTime,
  checkinData,
}) {
  const router = useRouter();
  function handleCheckIn(event) {
    event.preventDefault();
    const time = new Date()
      .toLocaleTimeString()
      .split(":")
      .slice(0, 2)
      .join(":");
    setCheckinTime(time);

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const checkinData = {
      id: data.id,
      checkin_Time: time,
      name: locations.find((location) => location.id === data.id).name,
    };
    setCheckins([newCheckin]);

    localStorage.push(checkinData);
    router.push(`/location/${data.id}`);
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
      <AllInputWrapper>
        <StyledForm onSubmit={handleCheckIn}>
          <NumberInputWrapper>
            <legend>Bügel-Id/qr-code:</legend>
            <label htmlFor="IdInput"></label>
            <input
              id="IdInput"
              type="number"
              name="id"
              placeholder="...z.b 567139"
            />
          </NumberInputWrapper>
          <StyledParagraph>
            Die Bügel-Id finden sie mittig auf dem Bügel.{`\n`}Es handelt sich
            um{`\n`}eine 6-stellige Zahlenabfolge
          </StyledParagraph>
          <StyledButton type="submit">CHECK-IN</StyledButton>
        </StyledForm>
      </AllInputWrapper>
    </>
  );
}
export const AllInputWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

export const ImageWrapper = styled.section`
  border: 2px solid black;
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
  margin-top: 0px;
  box-shadow: 20px 15px 16px black;
  border-radius: 10px;
  padding: 10px;
  background-color: rgba(155, 225, 219, 0.8);
  button {
    background: none;
    border: none;
  }
  font-weight: bold;
`;
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NumberInputWrapper = styled.section`
  box-shadow: 20px 15px 16px black;
  border: 2px solid black;
  background-color: rgba(155, 225, 219, 0.8);
  border-radius: 10px;
  padding: 20px;
  input {
    border: none;
    border-bottom: 2px solid black;
    background: none;
  }
  width: 12rem;
  text-align: center;
  font-weight: bold;
`;

export const StyledParagraph = styled.p`
  background-color: rgba(155, 225, 219, 0.8);
  border: 2px solid black;
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
