import styled from "styled-components";
import { locations } from "../../DB/data";

/* const date = new Date().toLocaleDateString("en-us", {
  dateStyle: "medium",
}); */

const date = new Date();
console.log(date.getDay());

/* erstellt eine komponente die informationen Anzeigt
für Eingabefeld 1                   */

export default function Heading() {
  return (
    <Wrapper>
      <p>
        Kleidung
        <br />
        hinterlegt
      </p>
      <Border>
        <p>{/* {date} */}</p>
      </Border>
      <p>{locations[0].name} schließt um</p>
      <Border>
        <p>{locations[0].closing}</p>
      </Border>
    </Wrapper>
  );
}

/* Border und grau Grüner Hintergrund */
export const Wrapper = styled.div`
  border: 3px solid black;
  border-radius: 10px;
  text-align: center;
  padding: 45px;
  background: #9be1db;
`;

/* Border und dunkel grüner Hintergrund */
export const Border = styled.div`
  border: 3px solid black;
  border-radius: 10px;
  background: #10c4b4;
  padding: 1px;
`;
