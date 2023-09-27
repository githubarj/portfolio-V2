import Main from "./Main";
import Sidebar from "./Sidebar";
import { menuItems, projectsData } from "../../Data/projects";
import ProjectCard from "./ProjectCard";
import "./projects.css";
import { useState } from "react";
import Filters from "./Filters";

function Projects() {
  const [selectedFilters, setSelectedFilters] = useState(["all"]);

  const handleFilterChange = (filterName) => {
    setSelectedFilters((prevSelectedFilters) => {
      if (prevSelectedFilters.includes(filterName)) {
        return prevSelectedFilters.filter((filter) => filter !== filterName);
      } else {
        return [...prevSelectedFilters, filterName];
      }
    });
  };

  const filters = menuItems.map((item, index) => (
    <Filters
      key={index}
      {...item}
      index={index}
      checked={selectedFilters.includes(item.name)}
      onChange={() => handleFilterChange(item.name)}
    />
  ));

  const filteredProjects = selectedFilters.includes("all")
    ? projectsData
    : projectsData.filter((project) =>
        project.category.some((category) =>
          selectedFilters.map((str) => str.toLowerCase()).includes(category)
        )
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
