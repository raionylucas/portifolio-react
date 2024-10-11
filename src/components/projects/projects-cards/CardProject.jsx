import { useState } from "react";
import RedirectButton from "../../Buttons/RedirectButton/RedirectButton";
import "./CardProject.scss";

function CardProject(props) {
  const [name, setName] = useState(props.name);
  const [description, setDescription] = useState(props.description);
  const [projectLink, setProjectLink] = useState(props.projectLink);
  const [projectDisable, setProjectDisable] = useState();
  const [textBtnProject, setTextBtnProject] = useState(props.textBtnProject);

  if (!name && !description & !projectLink) {
    setName("Em construção");
    setDescription(
      "Aguarda só um pouquinho, um projeto incrível está sendo desenvolvido"
    );
    setProjectLink();
    setProjectDisable("project-disable");
    setTextBtnProject("Aguarde...");
  }

  return (
    <div className={`project-container ${projectDisable}`}>
      <div className="card-desc-content">
      <h3>{name}</h3>
      <p>{description}</p>
      </div>
      <RedirectButton className="card-project-btn" link={projectLink} name ={textBtnProject} />
    </div>
  );
}

export default CardProject;
