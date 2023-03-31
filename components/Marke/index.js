import styled from "styled-components";
import { locations } from "../../DB/data";
import Image from "next/image";



export default function Marke() {
  return (
    <>
      <OverAllWrapper>
        <HoleInTheMark />
        <DarkGreenContainer>
          <DisplayFlex>
            <QrImageWrapper>
              <Image src="/frame.png" alt="Qr/code" width={35} height={35} />
            </QrImageWrapper>
            <ForTheParagraph>
              <strong>{locations[0].id}</strong>
            </ForTheParagraph>
          </DisplayFlex>
        </DarkGreenContainer>
        <DarkGreenContainer>
          <DisplayFlex>
            <ForTheParagraph>
              <strong>{locations[0].userName}</strong>
            </ForTheParagraph>
            <ForTheParagraph>
              <strong>{locations[0].name}</strong>
            </ForTheParagraph>
          </DisplayFlex>
        </DarkGreenContainer>
      </OverAllWrapper>
    </>
  );
}

export const OverAllWrapper = styled.div`
  border: 3px solid black;
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
  padding-left: 20px;
  align-self: center;
`;


export const ForTheParagraph = styled.p`
  flex-wrap: wrap;
  /* border: 10px solid black; */
`;

export const DisplayFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* border: 3px solid black; */
  justify-content: space-evenly;
  margin: 2px;
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
