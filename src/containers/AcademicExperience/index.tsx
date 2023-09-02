// components
import { Title } from "@/components/Title";
import { TimelineCard } from "@/components/TimelineCard";
// styles
import { Container, DivDeck } from "./styles";
// types
import { IExperience } from "@/dtos/experience";

export function AcademicExperience() {
  const listAcademicExperience: IExperience[] = [
    {
      current: false,
      title:
        "Instrutor no curso de Front-end usando Next.js no evento SECS2023 - Universidade Federal do Ceará",
      time: "2023",
      description: (
        <>
          Aulas ministradas durante uma semana (cinco dias) para comunidade
          acadêmica abrangendo alunos dos cursos de Eng. de Computação (UFC),
          Eng. Elétrica (UFC) e Ciências da Computação (UEVA) com intuito de
          apresentar a tecnologia Next.js construindo junto aos alunos um
          projeto de Temporizador com página de Login e Cadastro de usuários.
          Foram abordados conceitos como: componentes, estado, propriedades,
          imutabilidade, hooks, CSS e Pixel Perfection com Figma. Além de
          tecnologias como: Sass, Emotion, Axios, React-Toastify e TypeScript.
        </>
      ),
    },
    {
      current: false,
      title:
        "Pesquisa e desenvolvimento: Supervisão de dados utilizando Node-RED, Node.js e ReactJS para adaptação de sistemas legados ao contexto da Indústria 4.0 - Universidade Federal do Ceará",
      time: "2021 - 2022",
      description: (
        <>
          Pesquisa e desenvolvimento de um ecossistema ciberfísico baseado em
          frameworks e bibliotecas JavaScript como proposta a sistemas legados
          para adaptação ao contexto da Indústria 4.0, atendendo pequenas e
          médias automações, apresentando uma solução simples, robusta e de
          fácil utilização, sem a necessidade de conhecimento prévio sobre
          protocolos de comunicação.
        </>
      ),
    },
    {
      current: false,
      title:
        "Instrutor no curso de Python para iniciantes na Universidade Federal do Ceará",
      time: "2019",
      description: (
        <>
          Aulas ministradas para a comunidade acadêmica visando apresentar as
          vantagens de aprender a linguagem Python, além de ensinar conceitos
          básicos para começar a programar usando o Jupyter Notebook. Conteúdos
          como: variáveis; operadores; entrada de dados; estruturas
          condicionais; estruturas de repetição; tuplas; conjuntos; funções;
          etc.
        </>
      ),
    },
    {
      current: false,
      title:
        "Membro do Programa de Educação Tutorial (PET) na Universidade Federal do Ceará",
      time: "2017 - 2021",
      description: (
        <>
          Atividades: Docência, como monitoria e cursos ministrados para a
          comunidade acadêmica; pesquisa, engajado junto aos professores da
          graduação no desenvolvimento de projetos e publicando-os em feiras
          universitárias; e extensão, realizando atividades fora da universidade
          voltadas à sociedade.
        </>
      ),
    },
  ];

  return (
    <Container>
      <Title>Experiência Acadêmica</Title>
      <DivDeck>
        {listAcademicExperience.map((experience, idx) => (
          <TimelineCard
            key={idx}
            experience={experience}
            lastItem={idx === listAcademicExperience.length - 1}
          />
        ))}
      </DivDeck>
    </Container>
  );
}
