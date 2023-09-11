import "./about.css";
import { filterIcons, menus } from "../../Data/aboutMe";
import Menu from "./Menu";

function Options() {
  const filters = filterIcons.map((item, index) => {
    return <img key={index} src={item.icon} alt="" className="icon" />;
  });

  const menu = menus.map((item, index) => {
    return <Menu key={index} {...item} />;
  });

  return (
    <div className="options-container">
      <div className="option-filters">{filters}</div>
      <div className="menu-section">{menu}</div>
    </div>
  );
}

export default Options;
