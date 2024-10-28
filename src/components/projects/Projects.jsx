import "./Projects.scss";
import CardProject from "./projects-cards/CardProject";

function Projects() {
  return (
    <section className='projects layout-grid'>
      <h2>Projetos</h2>
      <div className='projects__cards'>
        <CardProject
          name='Gerenciador Financeiro'
          description='Sistema de Gerenciamento Financeiro Pessoal desenvolvido com PHP, MySQL, e padrão MVC, utilizando Composer para gerenciar dependências. A plataforma permite organizar despesas, receitas e relatórios financeiros de forma prática e eficiente.'
          projectLink='https://github.com/raionylucas/gerenciador-financeiro-php/tree/main'
          textBtnProject='Visitar Repositório'
        />
        <CardProject
          name='Dr.Hugo Ary Oliveira'
          description='O site do Dr. Hugo Ary Oliveira é uma página de apresentação profissional, desenvolvida em HTML, CSS e jQuery, destacando os serviços oferecidos pelo neurologista. Com uma navegação clara, o site facilita o acesso ao contato e localização para novos e antigos pacientes.'
          projectLink='https://drhugoary.com.br'
          textBtnProject='Visitar Projeto'
        />
        <CardProject
          name='Data Agency'
          description='Data Agency é um site moderno para uma agência de marketing digital, desenvolvido em HTML, CSS e jQuery, com foco em interatividade e visual atraente. A interface é clean e responsiva, destacando os serviços e portfólio da agência para melhorar a experiência do usuário.'
          projectLink='https://dataagency.vercel.app'
          textBtnProject='Visitar Projeto'
        />
      </div>
    </section>
  );
}

export default Projects;
