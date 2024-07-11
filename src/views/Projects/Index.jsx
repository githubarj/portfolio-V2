import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addOpenKeys } from '../../redux/slices/navSlice';
import { FloatButton, Row } from 'antd';
import CardComponent from './Components/CardComponent';
import { projectsData } from '../../Data/projects';
import { v4 as uuidv4 } from 'uuid';
import { FaArrowUp } from 'react-icons/fa6';
import { motion } from 'framer-motion';

const Projects = () => {
  const dispatch = useDispatch();
  const isMobile = useSelector((state) => state.layout.isMobile.value);
  const selectedKeys = useSelector((state) => state.layout.selectedKeys.value);
  useEffect(() => {
    dispatch(addOpenKeys(isMobile ? [] : ['projects']));
  }, []);

  function filterProjectsByCategories(projects, selectedFilters) {
    return projects.filter((project) =>
      project.category.some((category) => selectedFilters.includes(category))
    );
  }

  const filteredObjects =
    filterProjectsByCategories(projectsData, selectedKeys).length === 0
      ? projectsData
      : filterProjectsByCategories(projectsData, selectedKeys);

  return (
    <>
      <motion.div
        key='card-component'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <FloatButton.BackTop
          style={{ bottom: '55px', right: '5px' }}
          icon={<FaArrowUp />}
        />

        <Row className='projects-container' gutter={[30, 30]}>
          {filteredObjects.map((item) => (
            <CardComponent key={uuidv4()} {...item} />
          ))}
        </Row>
      </motion.div>
    </>
  );
};

export default Projects;
