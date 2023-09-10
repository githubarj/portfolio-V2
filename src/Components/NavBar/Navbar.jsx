import "./navbar.css";
import { navItems } from "../../Data/links";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav-container">
      <div className="nav-main">
        <div className=" body-text ">{navItems.name}</div>
        <div className="links">
          <ul>
            {navItems.links.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.to} className="body-text">
                    {item.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="nav-contact">
        <Link to="/contactMe" className="body-text">
          _contact-me
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
