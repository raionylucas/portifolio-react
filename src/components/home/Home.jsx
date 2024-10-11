import RedirectButton from "../Buttons/RedirectButton/RedirectButton";
import CopyButton from "../Buttons/CopyButton/CopyButton";

//Icons
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

//Images
import Resume from "../../assets/resume/Lucas_Raiony_Desenvolvedor_Web.pdf";

//Styles
import "./Home.scss";
import IconsButton from "../Buttons/IconButton/IconsButton";

function Home() {
  return (
    <section className='home layout-grid'>
      <h1 className='home__title'>
        Olá. Sou Lucas Raiony Desenvolvedor Web 👋{" "}
      </h1>
      <div className='home__buttons'>
        <RedirectButton name='Meu currículo' link={Resume} />
        <CopyButton />
        <IconsButton />
      </div>
    </section>
  );
}

export default Home;
