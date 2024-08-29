import logo from "../../Assets/Gallery/icons/logo.svg";
import "../Footer/footer.module.scss";

function Footer() {
  return (
    <div className="footer">
      <img className="footer_logo" src={logo} alt="Logo" />
      <div className="footer_container">
        <div className="footer_container_element">
          <h3 className="footer_title">Marthwaite, Sedbergh Cumbria</h3>
          <p className="footer_text">+00 44 123 4567</p>
        </div>
        <div>
          <h3 className="footer_title">Open times</h3>
          <p className="footer_text">Mon - Fri: 09:00 am - 10:00 pm</p>
          <p className="footer_text">Sat - Sun: 09:00 am - 11:30 pm</p>
          </div>
      </div>
    </div>
  );
}

export default Footer;
