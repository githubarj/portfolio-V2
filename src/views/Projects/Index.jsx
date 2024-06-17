import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addOpenKeys } from '../../redux/slices/navSlice';
import { Col, FloatButton, Row } from 'antd';
import CardComponent from './Components/CardComponent';
import { projectsData } from '../../Data/projects';
import { v4 as uuidv4 } from 'uuid';
import { FaArrowUp } from 'react-icons/fa6';

const Projects = () => {
  const dispatch = useDispatch();
  const isMobile = useSelector((state) => state.layout.isMobile.value);
  useEffect(() => {
    dispatch(addOpenKeys(isMobile ? [] : ['projects']));
  }, []);

  return (
    <>
      <FloatButton.BackTop
        style={{ bottom: '55px', right: '5px' }}
        icon={<FaArrowUp />}
      />

      <Row className='projects-container' gutter={[30, 30]}>
        {projectsData.map((item) => (
          <CardComponent key={uuidv4()} {...item} />
        ))}
      </Row>
    </>
  );
};

export default Projects;
