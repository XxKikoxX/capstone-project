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
          <Qrid>
           <P_image>
              <img src="/frame.png" width="35" height="35"></img>
            </P_image>
            <article>
              <P3>
                <p>{locations[0].id}</p>
              </P3>
            </article>
            </Qrid>
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
  /* text-align: center; */
  padding: 25%;
  background: #9be1db;
`;

/* Border und dunkel grüner Hintergrund */
export const Border = styled.article`
  border: 3px solid black;
  background: #10c4b4;
  border-radius: 15px;
`;

/* Qrid vergibt ein Display Flex an den Qr-code und die Id */

export const Qrid = styled.div`
  display: flex;
`;

/* P3 ist für die Id zuständig */

export const P3 = styled.p`
  padding-left: 50px;
`;

/* P_image ist für den Qr-code zuständig */

export const P_image = styled.p`
  padding-left: 20px;
`;




