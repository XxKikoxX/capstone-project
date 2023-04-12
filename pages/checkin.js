import Image from "next/image";
import styled from "styled-components";
import { useRouter } from "next/router";

export default function CheckIn() {
  const router = useRouter();

  function handleCheckIn(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    router.push(`/location/${data.id}`);
  }

  return (
    <>
      <ImageWrapper>
        <Image
          src="/Logo.png"
          height={210}
          width={290}
          alt="A Picture of a Hanger with Text around"
        />
      </ImageWrapper>
      <AllInputWrapper>
        <StyledForm onSubmit={handleCheckIn}>
          <NumberInputWrapper>
            <label htmlFor="IdInput">ID:</label>
            <input
              id="IdInput"
              type="number"
              name="id"
              placeholder="...z.b 567139"
            />
          </NumberInputWrapper>
          <StyledButton type="submit">CHECK-IN</StyledButton>
        </StyledForm>
      </AllInputWrapper>
    </>
  );
}
export const AllInputWrapper = styled.section`
  /* border: 3px solid black; */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

export const ImageWrapper = styled.section`
  border: 3px solid black;
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
  margin-top: 50px;
  box-shadow: 20px 15px 16px black;
  border-radius: 10px;
  padding: 8px;
  background-color: rgba(155, 225, 219, 0.8);
  button {
    background: none;
    border: none;
  }
`;
export const StyledForm = styled.form`
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
`;
