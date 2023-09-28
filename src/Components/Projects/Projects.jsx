import Main from "./Main";
import Sidebar from "./Sidebar";
import { menuItems, projectsData } from "../../Data/projects";
import ProjectCard from "./ProjectCard";
import "./projects.css";
import { useState } from "react";
import Filters from "./Filters";

function Projects() {
    const [selectedFilter, setSelectedFilter] = useState("all");

 
  const handleFilterChange = (filterName) => {
    setSelectedFilter(filterName);
  };

  const filters = menuItems.map((item, index) => (
    <Filters
      key={index}
      {...item}
      index={index}
      checked={item.name === selectedFilter}
      onChange={() => handleFilterChange(item.name)}
    />
  ));

  const filteredProjects =
    selectedFilter === "all"
      ? projectsData
      : projectsData.filter((project) =>
          project.category.includes(selectedFilter.toLowerCase())
        );

  const projects = filteredProjects.map((item, index) => (
    <ProjectCard key={index} {...item} number={index} />
  ));

  return (
    <div className="projects-container">
      <Sidebar filters={filters} />
      <Main projects={projects} />
    </div>
  );
}

export default Projects;

// console.log(filtersComps);
// useEffect(
//   () =>
//     setProjectsArray(() => {
//       const arr = [];
//       filtersComps[menuItems.name] &&
//         projectsData.map(
//           (item) =>
//             item.category.some(
//               (each) => each.toLowercase() == filtersComps[menuItems.name]
//             ) && arr.push(item)
//         );
//       return arr;
//     }),

//   [filtersComps]
// );
