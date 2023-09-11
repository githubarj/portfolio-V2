import "./about.css";
import PropTypes from "prop-types";
import ContextMenu from "./ContextMenu";
import { useState } from "react";

function MainOptions(props) {
  const [contextState, setContextState] = useState(false);
  const [appear, setAppear] = useState(false);

  function toggleContext() {
    setContextState((prev) => !prev);
    setTimeout(() => {
      setAppear((prev) => !prev);
    }, 300);
  }

  const context = props.context;
  const contextMenu = context.map((item, index) => {
    return <ContextMenu key={index} {...item} />;
  });

  return (
    <div className="one-option" onClick={toggleContext}>
      <img
        src="/icons/arrow.png"
        alt=""
        style={{ display: `${props.display}` }}
        className={`icon arrow-icon ${contextState ? "arrow-rotate" : ""} `}
      />

      <div className="main-and-context">
        <div className="option-main">
          <img src={props.icon} alt="" className="menu-icon" />
          <p className="menu-text labels-text"> {props.text} </p>
        </div>
        <div
          className={` context-menu-options  ${
            contextState ? "show-context" : ""
          } ${appear ? "context-appear" : ""} `}
        >
          {contextMenu}
        </div>
      </div>
    </div>
  );
}

MainOptions.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
  display: PropTypes.string,
  context: PropTypes.array,
};

export default MainOptions;
