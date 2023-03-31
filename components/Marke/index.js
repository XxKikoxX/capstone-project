import styled from "styled-components";
import { locations } from "../../DB/data";
import Image from "next/image";

export default function Marke() {
  return (
    <>
      <OverAllWrapper>
        <HoleInTheMark />
        <DisplayFlex>
          <DarkGreenContainer>
            <QrImageWrapper>
              <Image src="/frame.png" alt="Qr/code" width={35} height={35} />
            </QrImageWrapper>
            <StyledParagraph>{locations[0].id}</StyledParagraph>
          </DarkGreenContainer>
          <DarkGreenContainer>
            <StyledParagraph>{locations[0].userName}</StyledParagraph>
            <StyledParagraph>{locations[0].name}</StyledParagraph>
          </DarkGreenContainer>
        </DisplayFlex>
      </OverAllWrapper>
    </>
  );
}

export const OverAllWrapper = styled.div`
  border: 3px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 100%;
  text-align: center;
  padding: 17%;
  background-color: rgba(155, 225, 219, 0.7);
  margin: 10px;
  /* opacity: 50% ; */
`;

export const DarkGreenContainer = styled.div`
  border: 3px solid black;
  background: #10c4b4;
  border-radius: 15px;
  justify-content: space-between;
  opacity: 1;
  rgba(16, 196, 180, 0)
`;

export const QrImageWrapper = styled.div`
  /* padding-left: 20px;
  align-self: center; */
  /* border: 3px solid black; */
`;

export const DisplayFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 3px solid black;
  justify-content: space-evenly;
  margin: 2px;
  flex-direction: column;
`;

export const HoleInTheMark = styled.div`
  border: 1px solid black;
  border-radius: 100%;
  height: 60px;
  width: 60px;
  position: center;
  top: 50px;
  background: repeat;
  background-size: 500%;
`;

export const StyledParagraph = styled.p`
  font-weight: bold;
`;
