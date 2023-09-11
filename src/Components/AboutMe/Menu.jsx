import { useState } from "react";
import "./about.css";
import PropTypes from "prop-types";
import MainOptions from "./MainOptions";

function Menu(props) {
  const [wholeMenu, setWholeMenu] = useState(false);
  function toggleWholeMenu() {
    setWholeMenu((prev) => !prev);
  }
 
  const menuItems = props.menuItems
  const mainOptions = menuItems.map((item, index) => {
    return <MainOptions key={index} {...item} />
  })


  return (
    <div className="menu-container">
      <div className="section" onClick={toggleWholeMenu}>
        <img
          src="/icons/arrow-head.png"
          alt=""
          className={`icon ${wholeMenu ? "arrowhead-rotate" : ""} `}
        />
        <p className=" labels-text section-tag">{props.heading}</p>
      </div>

      <div className={`menu-items ${wholeMenu ? "show-menu" : ""}  `}>
        <div className="menu-options"> {mainOptions} </div>
      </div>
    </div>
  );
}

Menu.propTypes = {
  heading: PropTypes.string,
  menuItems: PropTypes.array,
  display: PropTypes.string,
  id: PropTypes.number,
};

export default Menu;
