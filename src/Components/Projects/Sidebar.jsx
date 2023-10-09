import "./projects.css";
import PropTypes from "prop-types";

function Sidebar({ filters }) {
  return (
    <div className="sidebar-container">
      <p className="labels-text sidebar-heading">
        <img src="/icons/arrow-head.png" alt="" className="icon" />
        Projects
      </p>
      <div className="filter-options">{filters}</div>
    </div>
  );
}

Sidebar.propTypes = {
  filters: PropTypes.array,
};

export default Sidebar;
