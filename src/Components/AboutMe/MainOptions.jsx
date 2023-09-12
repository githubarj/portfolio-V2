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
    }, 100);
  }

  const context = props.context;
  const contextMenu = context
    ? context.map((item, index) => {
        return <ContextMenu key={index} {...item} />;
      })
    : "";

  return (
    <div className="one-option" onClick={toggleContext}>
      {context && (
        <img
          src="/icons/arrow.png"
          alt=""
          className={`icon arrow-icon ${contextState && "arrow-rotate"}`}
        />
      )}

      <div className="main-and-context">
        <div className="option-main">
          <img src={props.icon} alt="" className="menu-icon" />
          <p className="menu-text labels-text"> {props.text} </p>
        </div>

        {contextState && (
          <div
            className={` context-menu-options  
          ${appear && "context-appear"} `}
          >
            {contextMenu}
          </div>
        )}
      </div>
    </div>
  );
}

MainOptions.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
  context: PropTypes.array,
};

export default MainOptions;
