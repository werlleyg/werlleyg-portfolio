import { Title } from "@/components/Title";
import Image from "next/image";
import Link from "next/link";
// styles
import { Container, Content } from "./styles";
// images

export function Footer() {
  return (
    <Container>
      <Content>
        © Desenvolvido por{" "}
        <Link href={`https://linkedin.com/in/werlleyg`} target="_blank">
          Werlley Ponte
        </Link>
      </Content>
    </Container>
  );
}
