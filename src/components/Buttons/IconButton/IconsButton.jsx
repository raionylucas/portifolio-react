//Icons
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";

import "./IconButton.scss";

function IconsButton() {
  return (
    <div className='icon-button'>
      <a href='https://github.com/raionylucas' className='social-button'>
        <FaGithub />
      </a>
      <a
        href='https://www.linkedin.com/in/lucas-raiony-b9899a2b5/'
        className='social-button'>
        <FaLinkedin />
      </a>
    </div>
  );
}

export default IconsButton;
