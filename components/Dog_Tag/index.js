import styled from "styled-components";
import Image from "next/image";

export default function Dog_Tag({ location }) {
  return (
    <OverAllWrapper key={location.id}>
      <DisplayFlex>
        <DarkGreenContainer>
          <QrImageWrapper>
            <Image src="/frame.png" alt="Qr/code" width={35} height={35} />
          </QrImageWrapper>
          <StyledParagraph>{location.id}</StyledParagraph>
        </DarkGreenContainer>
        <DarkGreenContainer>
          <StyledParagraph>{location.userName}</StyledParagraph>
          <StyledParagraph>{location.name}</StyledParagraph>
        </DarkGreenContainer>
      </DisplayFlex>
    </OverAllWrapper>
  );
}

export const OverAllWrapper = styled.section`
  border: 3px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 100%;
  text-align: center;
  padding: 3rem;
  background-color: rgba(155, 225, 219, 0.8);
  margin: 13px;
  box-shadow: 20px 18px 19px 5px black;
`;

export const DarkGreenContainer = styled.section`
  border: 3px solid black;
  background: #10c4b4;
  border-radius: 15px;
  box-shadow: 20px 15px 16px black;
  padding: 6px;
`;

export const QrImageWrapper = styled.section`
  margin-top: 10px;
  margin-bottom: -10px;
`;

export const DisplayFlex = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 2px;
  flex-direction: column;
`;

export const StyledParagraph = styled.p`
  font-weight: bold;
`;
