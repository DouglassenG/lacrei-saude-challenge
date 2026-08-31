import { WelcomeHero } from "@/components/Welcome/WelcomeHero";
import { InfoCard } from "@/components/Welcome/InfoCard";
import {
  CardTextContent,
  CardSubtitle,
  CardParagraph,
  CardImage,
} from "@/components/Welcome/InfoCard.styles";

export default function Home() {
  return (
    <main style={{ display: "flex", flexDirection: "column", gap: "32px", padding: "32px" }}>
      <WelcomeHero tagLabel="Tag" title="Boas-vindas a Marsha!" />

      <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
        <InfoCard
          tagLabel="Inicie aqui"
          title="Inicie aqui"
          headerColor="#018762"
          maxWidth="1543px"
        >
          <CardTextContent>
            <div>
              <CardSubtitle>O que é a Marsha?</CardSubtitle>
              <CardParagraph>
                A Marsha é o Guia de Estilo da Lacrei Saúde, nossa fonte da
                verdade e local para manter nosso produto digital
                consistente, agilizar nosso trabalho e facilitar a
                manutenção do produto. A Marsha é feita pelo e para o time,
                toda sugestão de melhoria será sempre bem-vinda.
              </CardParagraph>
            </div>
            <div>
              <CardSubtitle>Modo de uso</CardSubtitle>
              <CardParagraph>
                O Guia de Estilo da Lacrei Saúde se divide em: Foundations,
                onde você encontrará elementos base para a criação de uma
                interface, incluindo cor, espaço, tipografia, ícones, entre
                outros. Componentes, os componentes que compõem o Design
                System contam com modo de uso, componentes, anatomia e
                questões de acessibilidade, pedimos que toda a documentação
                seja lida com atenção.
              </CardParagraph>
            </div>
          </CardTextContent>
        </InfoCard>

        <InfoCard
          tagLabel="Marsha P. Johnson"
          title="A homenageada"
          headerColor="#017C7C"
          maxWidth="1287.36px"
        >
          <CardImage src="/marsha.jpg" alt="Marsha P. Johnson" />
          <CardTextContent>
            <CardParagraph>
              Há 50 anos, Marsha P. Johnson estava na linha de frente da
              Rebelião de Stonewall Inn, um marco crucial para os direitos
              dos homossexuais e transexuais, ocorrido em 28 de junho de
              1969 em Nova York...
            </CardParagraph>
          </CardTextContent>
        </InfoCard>
      </div>
    </main>
  );
}