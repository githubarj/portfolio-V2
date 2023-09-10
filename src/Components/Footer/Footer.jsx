import "./footer.css";
import { footerItems } from "../../Data/links";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <p className="body-text">find me in:</p>
        {footerItems.links.map((item, index) => {
          return (
            <a key={index} href={item.url} rel="noreferrer" target="_blank">
              <img src={item.icon} alt="" className="icon" />
            </a>
          );
        })}
      </div>
      <div className="footer-github">
        <a
          className="body-text"
          href="https://github.com/githubarj"
          rel="noreferrer"
          target="_blank"
        >
        githubarj <img src="/icons/github.png" alt="" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
