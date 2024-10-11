import React from "react";

function RedirectButton({link, name}) {
  return (
    <a href={link} className='btn' target='_blank'>
      {name}
    </a>
  );
}

export default RedirectButton;
