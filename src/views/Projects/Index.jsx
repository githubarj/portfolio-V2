import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addOpenKeys } from '../../redux/slices/navSlice';
import { Col, FloatButton, Row } from 'antd';
import CardComponent from './Components/CardComponent';
import { projectsData } from '../../Data/projects';
import { v4 as uuidv4 } from 'uuid';
import { FaArrowUp } from 'react-icons/fa6';

const Projects = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addOpenKeys(['projects']));
  }, []);

  // TODO restrict the view width so stop rocking and prevent body being scrollable

  return (
    <>
      <FloatButton.BackTop
        style={{ bottom: '55px', right: '5px' }}
        tooltip={<div>Scroll to top</div>}
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
