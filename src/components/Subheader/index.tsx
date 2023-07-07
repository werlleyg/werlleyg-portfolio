import { useState } from "react";
import { ButtonContact, Container, DivOptions, DivSetLanguage } from "./styles";
import Image from "next/image";

// icons
import MailBox from "../../../public/assets/icons/mailbox.svg";

export function Subheader() {
  const [subheaderData] = useState({
    email: "werlleyponte@gmail.com",
    message:
      "Apaixonado por soluções tecnológicas que conectam pessoas e ideias",
  });
  return (
    <Container>
      <p>{`${subheaderData.email}  |  ${subheaderData.message}`}</p>
      <DivOptions>
        <DivSetLanguage>
          BR-US
          <label>
            <input type='checkbox' />
            <span className='slider'></span>
          </label>
        </DivSetLanguage>
        <ButtonContact>
          <Image src={MailBox} alt={"Mailbox"} />
          Bora bater um papo?
        </ButtonContact>
      </DivOptions>
    </Container>
  );
}
