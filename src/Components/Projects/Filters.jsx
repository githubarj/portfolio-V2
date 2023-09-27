import "./projects.css";
import PropTypes from "prop-types";

function Filters(props) {
  return (
    <label htmlFor={props.index} className="labels-text filter-label">
      <input
        type="checkbox"
        id={props.index}
        checked={props.checked}
        onChange={props.onChange}
      />
      <div className="label-text">
        <img src={props.icon} alt="" className="icon" />
        {props.name}
      </div>
    </label>
  );
}

Filters.propTypes = {
  index: PropTypes.number,
  name: PropTypes.string,
  icon: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Filters;
