import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <StyledSection>
        <Image
          src="/Logo.png"
          height={200}
          width={290}
          alt="A Picture of a Hanger with Text around"
          priority="high"
        />
        <StyledH1>Wer sind wir und was wollen wir</StyledH1>
        <StyledH3>Kennen sie dass auch ?</StyledH3>
        <StyledArticle>
          Sie möchten einen netten Abend mit ihrer Familie oder freunden
          erleben, ob auf einer messe oder in einem Freizeitpark im Kino oder im
          Theater.
          <p>
            Das immer wechselnde Wetter sorgt dafür, dass sie nie so richtig
            wissen, was sie anziehen sollen.
          </p>{" "}
          <p>
            Es kommt, wie es kommen muss. Sie haben eine Jacke zu viel mit und
            diese müssen sie kontinuierlich mit sich herumtragen.
          </p>{" "}
          <p>
            Falls es eine Möglichkeit gibt, ihre Garderobe abzugeben, bekommen
            sie im Umkehrschluss im besten fall eine feste Marke aus Plastik
            oder aber sie bekommen einen kleinen zettel, wo eine Nummer
            draufsteht, mit der sich ihre Jacke im besten fall wiederfinden
            lässt.
          </p>
        </StyledArticle>
      </StyledSection>
    </>
  );
}

const StyledSection = styled.section`
text-align:center;
box-shadow: 20px 15px 16px black;
  border-radius: 10px;
  padding: 10px;
  background-color: rgba(155, 225, 219, 0.5);
  font-weight: bold;
  color: #3a2622;
  border 2px solid;
  border-color: black grey grey black;
`;

const StyledH1 = styled.h1`

`;

const StyledH3 = styled.h3``;

const StyledArticle = styled.article``;
