import "./navbar.css";
import { navItems } from "../../Data/links";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="nav-container">
      <div className="nav-main">
        <div className=" body-text ">{navItems.name}</div>
        <div className="links">
          <ul>
            {navItems.links.map((item, index) => {
              return (
                <li
                  key={index}
                  onClick={() => navigate(item.to)}
                  className={` 
                  body-text 
                  ${location.pathname == item.to ? "active" : ""}
                  `}
                >
                {item.text}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div
        className={` body-text nav-contact ${
          location.pathname == "/contactMe" ? "active" : ""
        }`}
        onClick={() => navigate("contactMe")}
      >
        _contact-me
      </div>
    </div>
  );
}

export default Navbar;
