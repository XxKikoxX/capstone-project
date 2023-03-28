import styled from "styled-components";
import { locations } from "../../DB/data";

export default function Heading() {
  return (
    <Wrapper>
      <Border>
        <p>{locations[0].name}</p>
      </Border>
      <Border>
        <p>
          {locations[0].name} schließt um {locations[0].closing}
        </p>
      </Border>
    </Wrapper>
  );
}

/* Border und grau Grüner Hintergrund */
export const Wrapper = styled.article`
  border: 2px solid black;
  border-radius: 10px;
  text-align: center;
  padding: 40px;
  background: #9be1db;
`;

/* Border und dunkel grüner Hintergrund */
export const Border = styled.article`
  border: 2px solid black;
  border-radius: 10px;
  background: #10c4b4;
  padding: 1px;
`;
