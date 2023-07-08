import { Subheader } from "@/components/Subheader";
import { Container } from "./styles";
import { Profile } from "@/components/Profile";

export function Header() {
  return (
    <Container>
      <Subheader />
      <Profile />
    </Container>
  );
}
