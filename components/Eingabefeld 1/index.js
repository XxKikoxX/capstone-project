import styled from "styled-components";
import { locations } from "../../db/data.js";
import moment from "moment";

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
        <p>
          {locations[0].name}

          <br />

          <span>schließt um</span>
        </p>
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
  padding: 25px;
  background-color: rgba(155, 225, 219, 0.6);
  margin: 25px;
`;

export const DarkGreenContainer = styled.div`
  border: 3px solid black;
  border-radius: 15px;
  text-align: center;
  background: #10c4b4;
  height: 4rem;
  width: 120px;
  min-width: 90px;
`;

export const DisplayFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
