import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

export default function CheckIn() {
  return (
    <>
      <ImageWrapper>
        <Image
          src="/../public/Logo.png"
          height={210}
          width={290}
          alt="A Picture of a Hanger with Text around"
        />
      </ImageWrapper>
      <AllInputWrapper>
        <NumberInputWrapper>
          <input type="number" placeholder="...z.b 567139" />
        </NumberInputWrapper>
        <ButtonWrapper>
          <input type="button" value="Check-in"></input>
        </ButtonWrapper>
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

export const ImageWrapper = styled.div`
  /* border: 3px solid black; */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
`;

export const ButtonWrapper = styled.div`
  margin-top: 50px;
  box-shadow: 20px 15px 16px black;
  border-radius: 20px;
`;

export const NumberInputWrapper = styled.div`
  box-shadow: 20px 15px 16px black;
  border-radius: 0px;
`;
