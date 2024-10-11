import { useState } from "react";
import "./CopyButton.scss";

function CopyButton() {
  const [copyMsg, setCopyMsg] = useState("Copiar Email");
  const email = "raionylucas7@gmail.com";

  function copyEmail() {
    navigator.clipboard.writeText(email);
    setCopyMsg("Email Copiado!");
  }

  setTimeout(() => {
    setCopyMsg("Copiar Email");
  }, 3000);

  return (
    <button className='copy-button' onClick={copyEmail}>
      <span>{copyMsg}</span>
      {email}
    </button>
  );
}

export default CopyButton;
