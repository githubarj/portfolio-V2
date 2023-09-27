import "./projects.css";
import PropTypes from "prop-types";

function ProjectCard(props) {
  return (
    <div className="project-card-container">
      <div className="card-heading">
        <p className="labels-text">
          <span className="project-counter">Project {props.number + 1} </span>
          {`// ${props.title}`}
        </p>
      </div>
      <div className="project-box">
        <div
          className="project-image"
          style={{ backgroundImage: `url(${props.image})` }}
        ></div>
        <div className="box-content">
          <p className="box-description body-text">{props.description}</p>
          <button className="default-button link-button ">
            <a
              href={props.link}
              className="code-snippets-text"
              target="_blank"
              rel="noreferrer"
            >
              view-project
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  image: PropTypes.string,
  description: PropTypes.string,
  number: PropTypes.number,
  title: PropTypes.string,
  link: PropTypes.string,
};

export default ProjectCard;
