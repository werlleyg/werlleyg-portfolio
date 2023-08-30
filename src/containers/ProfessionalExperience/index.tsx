// components
import { Title } from "@/components/Title";
import { TimelineCard } from "@/components/TimelineCard";
// styles
import { Container, DivDeck } from "./styles";
// types
import { IExperience } from "@/dtos/professionalExperience";

export function ProfessionalExperience() {
  const listPrefessionalExperience: IExperience[] = [
    {
      current: true,
      title:
        "Desenvolvedor Front-end WEB/Mobile, Designer e Sócio Proprietário na UX Software",
      time: "2023 - Hoje",
      description: (
        <>
          Desenvolvedor de softwares WEB e Mobile, ativamente participando do
          planejamento, coordenação e execução de várias aplicações usando
          metodologia ágil. Utilizando tecnologias como ReactJS, Next.Js,
          Node.Js, TypeScript, Ionic, Angular, entre outras, junto a ferramentas
          de SEO como Google Search Console e Clarity. Modelagem de fluxos do
          usuário e designer de interfaces usando Figma. Gerenciamento de build,
          publicação de projetos (AWS, Digital Ocean e Vercel) e pipeline
          Actions com GitHub.
          <br />
          <br />
          <b>Alguns projetos:</b>
          <br />
          - Plataforma WEB para gerenciamento de clientes e projetos de energia
          solar; <br />
          - Manutenção e desenvolvimento de aplicação Mobile e Website:
          Aplicativo de exercícios físicos e Website; <br />- Websites para
          provedores de internet.
        </>
      ),
    },
    {
      current: false,
      title:
        "Desenvolvedor Front-end WEB/Mobile e Analista de Sistemas na Ágil Engenharia de Telecomunicações ",
      time: "2022 - 2023",
      description: (
        <>
          Desenvolvedor de softwares WEB e Mobile, ativamente participando do
          planejamento, coordenação e execução de várias aplicações usando
          metodologia ágil. Utilizando tecnologias como ReactJS, Next.Js,
          Node.Js, TypeScript, Ionic, Angular, entre outras, junto a ferramentas
          de SEO como Google Search Console e Clarity. Gerenciamento de build,
          publicação de projetos (AWS, Digital Ocean e Vercel) e pipeline
          Actions com GitHub.
          <br />
          <br />
          <b>Alguns projetos:</b>
          <br />
          - Website e sistema de gerenciamento de cadastro para empresas de
          eventos; <br />
          - Plataforma WEB para gerenciamento de clientes e projetos de energia
          solar; <br />
          - Manutenção e desenvolvimento de aplicação Mobile e Website:
          Aplicativo de exercícios físicos e Website; <br />- Websites para
          provedores de internet.
        </>
      ),
    },
    {
      current: false,
      title:
        "Estagiário em projetos de Telecomunicações e Desenvolvimento de Software na Ágil Engenharia de Telecomunicações ",
      time: "2019 - 2021",
      description: (
        <>
          Desenvolvimento de projetos de compartilhamento de infraestrutura para
          redes de fibra ótica, participando de projetos aprovados em diversos
          estados brasileiros. Desenvolvimento de Softwares WEB, participando
          ativamente do planejamento, coordenação e execuão de diversos
          sistemas. Experiência com AutoCAD, Excel, ReactJS, Node.Js,
          JavaScript, entre outras tecnologias. Gerenciamento de build e
          publicação de projetos (AWS).
          <br />
          <br />
          <b>Alguns projetos:</b>
          <br />
          - Site e sistema de gerenciamento de cadastro para empresa de cursos:
          Alan Araújo Engenharia; <br />
          - Plataforma de ferramentas WEB de suporte a projetos de
          telecomunicações com as principais funcionalidades: conversão de
          documentos KML e Excel; medir tamanhos de cabos com arquivos .xml;
          classificar marcadores de mapa usando KNN; consumir a API do Google
          Maps para criar planilhas com informações de geolocalização de
          marcadores do mapa. Informações como: nome de rua, nome de bairro,
          nome de cidade, entre outros;
          <br />- Website e sistema de gerenciamento de cadastro para empresas
          de eventos.
        </>
      ),
    },
  ];

  return (
    <Container>
      <Title>Experiência Profissional</Title>
      <DivDeck>
        {listPrefessionalExperience.map((experience, idx) => (
          <TimelineCard
            key={idx}
            experience={experience}
            lastItem={idx === listPrefessionalExperience.length - 1}
          />
        ))}
      </DivDeck>
    </Container>
  );
}
