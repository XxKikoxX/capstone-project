import styled from "styled-components";

export default function Dog_Tag({ location }) {
  return (
    <OverAllWrapperStyledSection key={location.id}>
      <DisplayFlexStyledDiv>
        <DarkGreenStyledDiv>
          <StyledImage
            src="/frame.png"
            alt="Qr/code"
            width={35}
            height={35}
          ></StyledImage>
          <StyledParagraph>{location.id}</StyledParagraph>
        </DarkGreenStyledDiv>
        <DarkGreenStyledDiv>
          <StyledParagraph>{location.userName}</StyledParagraph>
          <StyledParagraph>{location.name}</StyledParagraph>
        </DarkGreenStyledDiv>
      </DisplayFlexStyledDiv>
    </OverAllWrapperStyledSection>
  );
}

export const OverAllWrapperStyledSection = styled.section`
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 100%;
  text-align: center;
  padding: 3rem;
  background-color: rgba(155, 225, 219, 0.8);
  margin: 13px;
  box-shadow: 20px 18px 19px 5px black;
  height: 100%;
  min-width: 95%;
`;

export const DarkGreenStyledDiv = styled.div`
  border: 2px solid black;
  background: #10c4b4;
  border-radius: 15px;
  box-shadow: 20px 15px 16px black;
  padding: 6px;
  width: 12rem;
`;

export const StyledImage = styled.img`
  margin-top: 10px;
  margin-bottom: -10px;
`;

export const DisplayFlexStyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 2px;
  flex-direction: column;
`;

export const StyledParagraph = styled.p`
  font-weight: bold;
`;
