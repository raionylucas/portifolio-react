import RedirectButton from "../Buttons/RedirectButton/RedirectButton";
import "./AboutMe.scss";

function AboutMe() {
  return (
    <section className='about layout-grid'>
      <div className='about__left'>
        <h2>Sobre mim</h2>
        <p>
          Meu nome é Lucas Raiony, tenho 23 anos e sou desenvolvedor web,
          formado em Sistemas para Internet pelo Instituto Federal de Brasília.
          Desde minha formação em 2019, decidi focar meus estudos e minha
          carreira no desenvolvimento de aplicações para a web,
          especializando-me nas principais tecnologias do mercado.
        </p>
        <RedirectButton
          name='Saiba mais'
          link='https://www.linkedin.com/in/lucas-raiony-b9899a2b5/'
        />
      </div>
      <div className='about__right'>
        <div className='about__right__skills'>
          <h2>Habilidades</h2>
          <ul className='about__right__skills__tags'>
            <li className='about__right__skills__tags__item'>PHP</li>
            <li className='about__right__skills__tags__item'>JavaScript</li>
            <li className='about__right__skills__tags__item'>HTML</li>
            <li className='about__right__skills__tags__item'>CSS3</li>
            <li className='about__right__skills__tags__item'>MySQL</li>
            <li className='about__right__skills__tags__item'>Git</li>
            <li className='about__right__skills__tags__item'>React</li>
            <li className='about__right__skills__tags__item'>Docker</li>
            <li className='about__right__skills__tags__item'>Laravel</li>
            <li className='about__right__skills__tags__item'>Tailwind</li>
            <li className='about__right__skills__tags__item'>Sass</li>
            <li className='about__right__skills__tags__item'>Figma</li>       
          </ul>
        </div>
        <div className='about__right__education'>
          <h2>Educação</h2>
          <h3>Tecnologia em sistemas para internet</h3>
          <span>Instituto Federal de Brasília | fev 2019 - fev 2022</span>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
