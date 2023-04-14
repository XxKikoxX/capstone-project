import styled from "styled-components";

export default function Information({ location, checkinTime }) {
  return (
    <>
      <OverAllWrapper key={location.id}>
        <DisplayFlex>
          <Text>Kleidung{`\n`}hinterlegt</Text>
          <DarkGreenContainer>
            <StyledParagraph>{checkinTime} Uhr</StyledParagraph>
          </DarkGreenContainer>
        </DisplayFlex>
        <DisplayFlex>
          <Text>
            {location.name}
            {`\n`}
            schließt um
          </Text>
          <DarkGreenContainer>
            <StyledParagraph>{location.closing}</StyledParagraph>
          </DarkGreenContainer>
        </DisplayFlex>
      </OverAllWrapper>
    </>
  );
}

export const OverAllWrapper = styled.section`
  border: 3px solid black;
  border-radius: 20px;
  padding: 25px;
  background-color: rgba(155, 225, 219, 0.8);
  margin: 25px;
  box-shadow: 20px 15px 16px black;
  border-radius: 20px;
`;

export const DarkGreenContainer = styled.section`
  border: 3px solid black;
  border-radius: 15px;
  text-align: center;
  background: #10c4b4;
  height: 4rem;
  width: 120px;
  min-width: 90px;
  box-shadow: 10px 13px 6px black;
  justify-content: space-between;
`;

export const DisplayFlex = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.p`
  white-space: pre-line;
`;
export const StyledParagraph = styled.p`
  font-weight: bold;
`;
