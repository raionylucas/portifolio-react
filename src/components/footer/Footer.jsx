import "./Footer.scss";
import CopyButton from "../Buttons/CopyButton/CopyButton";
import RedirectButton from "../Buttons/RedirectButton/RedirectButton";
import IconButton from "../Buttons/IconButton/IconsButton";

function Footer() {
  return (
    <footer className='footer layout-grid'>
      <div className='footer__links'>
        <div className='footer__links__buttons'>
          <RedirectButton
            name='Whatsapp'
            link='https://api.whatsapp.com/send?phone=5561998798679'
          />
          <CopyButton />
        </div>

        <IconButton className='footer__link__socials' />
      </div>
    </footer>
  );
}

export default Footer;
