import styled from "styled-components";

export default function Information({ location, checkinTime }) {
  return (
    <>
      <OverAllWrapperStyledSection key={location.id}>
        <DisplayFlexStyledSection>
          <NewLineStyledParagraph>
            Kleidung{`\n`}hinterlegt
          </NewLineStyledParagraph>
          <DarkGreenStyledSection>
            <StyledParagraph>{checkinTime} Uhr</StyledParagraph>
          </DarkGreenStyledSection>
        </DisplayFlexStyledSection>
        <DisplayFlexStyledSection>
          <NewLineStyledParagraph>
            {location.name}
            {`\n`}
            schließt um
          </NewLineStyledParagraph>
          <DarkGreenStyledSection>
            <StyledParagraph>{location.closing}</StyledParagraph>
          </DarkGreenStyledSection>
        </DisplayFlexStyledSection>
      </OverAllWrapperStyledSection>
    </>
  );
}

export const OverAllWrapperStyledSection = styled.section`
  border: 2px solid black;

  border-radius: 20px;
  padding: 25px;
  background-color: rgba(155, 225, 219, 0.8);
  margin: 25px;
  box-shadow: 20px 15px 16px black;
  border-radius: 20px;
`;

export const DarkGreenStyledSection = styled.section`
  border: 2px solid black;
  border-radius: 15px;
  text-align: center;
  background: #10c4b4;
  height: 4rem;
  width: 120px;
  min-width: 90px;
  box-shadow: 10px 13px 6px black;
  justify-content: space-between;
`;

export const DisplayFlexStyledSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NewLineStyledParagraph = styled.p`
  white-space: pre-line;
`;
export const StyledParagraph = styled.p`
  font-weight: bold;
`;
