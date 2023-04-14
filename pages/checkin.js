import Image from "next/image";
import styled from "styled-components";
import { useRouter } from "next/router";
/* import { locations } from "../db/data"; */

export default function CheckIn({ checkinTime, setCheckinTime }) {
  /* function handleCheckin() { */

  /* } */
  const router = useRouter();
  /* let nge = new Date().toLocaleString("de-DE"); */

  /* const [time, setTime] = useState(locations, {defaultValue:locations}); */

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
    /* setTime([data, ...time]); */
    /* console.log(data, time); */
    router.push(`/location/${data.id}`);
  }
  /* function handleChange({ event, index }) {
    const { value } = event.target;
    const list = [...time];
    list[index] = { ...list[index], lockedTime: value };
    setTime(list);
  } */
  return (
    <>
      <ImageWrapper>
        <Image
          src="/Logo.png"
          height={200}
          width={290}
          alt="A Picture of a Hanger with Text around"
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
  /* display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px; */
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
  /* width:20rem; */
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
  font-weight: 1000;
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
`;

export const StyledParagraph = styled.p`
  background-color: rgba(155, 225, 219, 0.8);
  border: 2px solid black;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  box-shadow: 20px 15px 16px black;
  margin: 30px;
  font-weight: 500;
  font-size: 10px;
  height: 4rem;
  width: 12rem;
`;
