import "./projects.css";
import PropTypes from "prop-types";

function Main({ projects }) {
  return (
    <div className="main-container">
      <div className="selected-projects body-text">
        <div className="selected-project-category">&nbsp;</div>
      </div>
      <div className="projects-content">{projects}</div>
    </div>
  );
}

Main.propTypes = {
  projects: PropTypes.array,
};

export default Main;
