import styled from "styled-components";
import { locations } from "../../DB/data";
import moment from "moment";

/* const date = moment().format("DD.MM.YYYY"); */
const now = moment();
const lockedTime = now.set().format("HH:mm");

export default function InformationPage() {
  return (
    <OverAllWrapper>
      <DisplayFlex>
        Kleidung <br /> hinterlegt
        <DarkGreenContainer>
          <p>
            <strong>{lockedTime} Uhr</strong>
          </p>
        </DarkGreenContainer>
      </DisplayFlex>
      <DisplayFlex>
        {locations[0].name}
        <br />
        schließt um
        <DarkGreenContainer>
          <p>
            <strong>{locations[0].closing}</strong>
          </p>
        </DarkGreenContainer>
      </DisplayFlex>
    </OverAllWrapper>
  );
}

export const OverAllWrapper = styled.div`
  border: 3px solid black;
  border-radius: 20px;
  text-align: center;
  padding: 20px;
  background-color: rgba(155, 225, 219, 0.6);
  margin: 20px;
`;

export const DarkGreenContainer = styled.div`
  border: 3px solid black;
  border-radius: 15px;
  background: #10c4b4;
  height: 4rem;
  width: 7rem;
`;

export const DisplayFlex = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  /* border: 3px solid black; */
  justify-content: space-between;
`;

/* export const StyledParagraph = styled.p`
  flex-wrap: wrap;
`; */
