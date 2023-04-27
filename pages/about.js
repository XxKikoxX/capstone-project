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
        <StyledH1>Wer sind wir und was wollen wir ?</StyledH1>
        <StyledH3>Kennen Sie das auch ?</StyledH3>
        <StyledArticle>
          Sie möchten einen netten Abend mit Ihrer Familie oder Ihren Freunden
          erleben ?
          <p>
            Doch ob auf einer Messe, im Freizeitpark, im Kino oder im Theater -
            das immer wechselnde Wetter sorgt dafür, dass Sie nie so richtig
            wissen, was Sie anziehen sollen.
          </p>{" "}
          <p>
            Es kommt, wie es kommen muss: Sie haben eine Jacke zu viel mit und
            müssen diese kontinuierlich mit sich herumtragen.
          </p>{" "}
          <p>
            Falls es eine Möglichkeit gibt, Ihre Kleidung abzugeben, bekommen
            Sie im Umkehrschluss zumeist eine feste Marke aus Plastik oder aber
            einen kleinen Zettel, wo eine Nummer draufsteht, mit der sich Ihre
            Jacke im besten Fall wiederfinden lässt.
          </p>
          <p>
            Und hier kommt unsere App ins Spiel: während der Zettel oder die
            Marke schnell verloren ist, haben Sie Ihr Handy im Idealfall stets
            griffbereit. Mit unserer App lösen Sie nicht nur Ihre Jacke sicher
            wieder aus, Sie wissen auch praktischerweise, wann die Lokalität
            schließt.
          </p>
          <p>
            Des Weiteren können Sie nach erfolgreichem Check-Out nachverfolgen
            zu welcher Uhrzeit Sie in welchem Lokal eingecheckt haben.
          </p>
          <p>.</p>
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

const StyledH1 = styled.h1``;

const StyledH3 = styled.h3``;

const StyledArticle = styled.article``;
