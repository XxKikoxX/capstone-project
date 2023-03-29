import styled from "styled-components";
import { locations } from "../../DB/data";



/* Hier entsteht meine Marke
   mit dem Benutzernamen der 
   location id und der location */

export default function Marke() {
  return (
    <>
      <Wrapper>
        <Border>
          <article>
            <p>{locations[0].id}</p>
          </article>
        </Border>
        <Border>
          <article>
            <p>{locations[0].userName}</p>
            <p>{locations[0].name}</p>
          </article>
        </Border>
      </Wrapper>
    </>
  );
}

/* Border und grau Grüner Hintergrund */
export const Wrapper = styled.article`
  border: 3px solid black;
  border-radius: 100%;
  text-align: center;
  padding: 120px;
  
  background: #9be1db;
`;

/* Border und dunkel grüner Hintergrund */
export const Border = styled.article`
  border: 3px solid black;
  background: #10c4b4;
  border-radius: 10px;
`;
