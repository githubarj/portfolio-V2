import "./about.css";
import PropTypes from "prop-types";

function ContextMenu(props) {
  return (
    <div className="menu-context">
      <img src="/icons/markdown.png" alt="" className="menu-icon" />
      <p className="context-text labels-text">{props.title}</p>
    </div>
  );
}

ContextMenu.propTypes = {
  title: PropTypes.string,
};

export default ContextMenu;
