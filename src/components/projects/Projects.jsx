import "./Projects.scss";
import CardProject from "./projects-cards/CardProject";

function Projects() {
  return (
    <section className='projects layout-grid'>
      <h2>Projetos</h2>
      <div className='projects__cards'>
        <CardProject 
        name='Gerenciador Financeiro'
        description = ' Sistema criado para gerenciar finanças pessoais desenvolvido com PHP, MySQL, Composer e Padrão MVC.' 
        projectLink='https://github.com/raionylucas/gerenciador-financeiro-php/tree/main'
        textBtnProject ='Visitar Repositório'
        />
        <CardProject/>
        <CardProject />
      </div>
    </section>
  );
}

export default Projects;
