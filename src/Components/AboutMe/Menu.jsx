import { useState } from "react";
import "./about.css";
import PropTypes from "prop-types";

function Menu(props) {
  const menuItems = props.menuItems;

  const [optionClicked1, setClick1] = useState(false);

  function toggleContext1() {
    setClick1((prev) => !prev);
  }

  const [optionClicked2, setClick2] = useState(false);
  function toggleContext2() {
    setClick2((prev) => !prev);
  }

  const [optionClicked3, setClick3] = useState(false);

  function toggleContext3() {
    setClick3((prev) => !prev);
  }

  const mainOptions = menuItems.map((item, index) => {
    return (
      <div key={index} className="one-option">
        <img
          /* =============================Arrow toggling======================== */

          onClick={
            index == 0
              ? toggleContext1
              : index == 1
              ? toggleContext2
              : index == 2
              ? toggleContext3
              : ""
          }
          /* ===================================================================*/

          src="/icons/arrow.png"
          alt=""
          style={{ display: `${props.display}` }} //whether to show arrow icon or not
          /* ===========================================Arrow Rotation=========================*/
          className={`icon arrow-icon ${
            index == 0 && optionClicked1
              ? "arrow-rotate"
              : index == 1 && optionClicked2
              ? "arrow-rotate"
              : index == 2 && optionClicked3
              ? "arrow-rotate"
              : ""
          }   `}
          /* ===================================================================================*/
        />

        <div className="main-and-context">
          {/*=======================toggling========================= */}
          <div
            className="option-main"
            onClick={
              index == 0
                ? toggleContext1
                : index == 1
                ? toggleContext2
                : index == 2
                ? toggleContext3
                : ""
            }
          >
            {/*=================================================== */}
            <img src={item.icon} alt="" className="menu-icon" />
            <p className="menu-text labels-text"> {item.text} </p>
          </div>

          {/* ====================Context appearance====================== */}
          <div
            className={`context-menu-options ${
              index == 0 && optionClicked1
                ? "show-context"
                : index == 1 && optionClicked2
                ? "show-context"
                : index == 2 && optionClicked3
                ? "show-context"
                : ""
            }   `}
          >
            {/* ============================================================================== */}
            {item.context.map((each, index) => {
              return (
                <div key={index} className="menu-context">
                  <img src="/icons/markdown.png" alt="" className="menu-icon" />
                  <p className="context-text labels-text">{each.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  });

  const [wholeMenu, setWholeMenu] = useState(false);
  function toggleWholeMenu() {
    setWholeMenu((prev) => !prev);
  }

  return (
    <div className="menu-container">
      {/*============================= Heading part================================== */}

      <div className="section" onClick={toggleWholeMenu}>
        <img
          src="/icons/arrow-head.png"
          alt=""
          className={`icon ${wholeMenu ? "arrowhead-rotate" : ""} `}
        />
        <p className=" labels-text section-tag">{props.heading}</p>
      </div>

      {/* =========================================================================== */}

      <div className={`menu-items ${wholeMenu ? "show-menu" : ""}  `}>
        <div className="menu-options">{mainOptions}</div>
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
