import { useState } from "react";
import "./about.css";
import PropTypes from "prop-types";
import MainOptions from "./MainOptions";

function Menu(props) {
  const [clicked, SetClick] = useState(true);
  function toggleClick() {
    SetClick((prev) => !prev);
  }

  const menuItems = props.menuItems;
  const mainOptions = menuItems.map((item, index) => {
    return <MainOptions key={index} {...item} />;
  });

  return (
    <div className="menu-container">
      <div className="section" onClick={toggleClick}>
        <img
          src="/icons/arrow-head.png"
          alt=""
          className={`icon ${!clicked && "arrowhead-rotate"}`}
        />
        <p className=" labels-text section-tag">{props.heading}</p>
      </div>

      {clicked && (
        <div className={`menu-items`}>
          <div className="menu-options"> {mainOptions} </div>
        </div>
      )}
    </div>
  );
}

Menu.propTypes = {
  heading: PropTypes.string,
  menuItems: PropTypes.array,
};

export default Menu;
