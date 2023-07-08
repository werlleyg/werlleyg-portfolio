import { useCallback, useState } from "react";
import {
  ButtonSocialMedia,
  Container,
  DivOutProfileImage,
  DivSocialMedias,
  Divider,
  H1,
  H3,
} from "./styles";
import Image from "next/image";

// images
import ProfileImage from "../../../public/assets/images/profile.png";

// icons
import LinkedinIcon from "../../../public/assets/icons/linkedin.svg";
import GithubIcon from "../../../public/assets/icons/github.svg";
import InstagramIcon from "../../../public/assets/icons/instagram.svg";
import WhatsappIcon from "../../../public/assets/icons/whatsapp.svg";

export function Profile() {
  const [profileData] = useState({
    name: "Werlley Ponte",
    degreeInformation:
      "Eng. Eletricista | Pós-graduado em Eng. de Software Desenvolvedor Front-End",
    socialMedias: [
      {
        title: "LinkedIn",
        url: "#",
        imageUrl: LinkedinIcon,
      },
      {
        title: "GitHub",
        url: "#",
        imageUrl: GithubIcon,
      },
      {
        title: "Instagram",
        url: "#",
        imageUrl: InstagramIcon,
      },
      {
        title: "Whatsapp",
        url: "#",
        imageUrl: WhatsappIcon,
      },
    ],
  });
  return (
    <Container>
      <DivOutProfileImage>
        <Image src={ProfileImage} alt="Profile" />
      </DivOutProfileImage>
      <H1>{profileData.name}</H1>
      <Divider />
      <H3>{profileData.degreeInformation}</H3>
      <DivSocialMedias>
        {profileData?.socialMedias.map((socialmedia, idx) => (
          <ButtonSocialMedia key={idx} href={socialmedia.url} target="_blank">
            <Image src={socialmedia.imageUrl} alt={socialmedia.title} />
          </ButtonSocialMedia>
        ))}
      </DivSocialMedias>
    </Container>
  );
}
