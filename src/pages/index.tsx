import Head from "next/head";
import Image from "next/image";
import { Roboto_Condensed } from "next/font/google";
import { Header } from "@/containers/Header";
import { TechnologiesAndTools } from "@/containers/TechnologiesAndTools";
import { AboutMe } from "@/containers/AboutMe";
import { Skills } from "@/containers/Skills";
import { QuickRead } from "@/containers/QuickRead";
import { MyProjects } from "@/containers/MyProjects";
import { Footer } from "@/containers/Footer";
import { ProfessionalExperience } from "@/containers/ProfessionalExperience";
import { AcademicExperience } from "@/containers/AcademicExperience";
import { Education } from "@/containers/Education";

const roboto = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Werlley Ponte - Portfólio</title>
        <meta
          name="description"
          content="My name is Werlley Ponte, and I bring to you a little bit of my journey as a developer in my online portfolio. 💻🚀"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={roboto.className}>
        <Header />
        <TechnologiesAndTools />
        <AboutMe />
        <Skills />
        <QuickRead />
        <MyProjects />
        <ProfessionalExperience />
        <AcademicExperience />
        <Education />
        <Footer />
      </main>
    </>
  );
}
