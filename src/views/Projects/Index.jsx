import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addOpenKeys } from '../../redux/slices/navSlice';
import { Col, Row } from 'antd';
import CardComponent from './Components/CardComponent';
import { projectsData } from '../../Data/projects';
import { v4 as uuidv4 } from 'uuid';

const Projects = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addOpenKeys(['projects']));
  }, []);

  // TODO restrict the view width so stop rocking and prevent body being scrollable

  return (
    <Row className='projects-container' gutter={[30, 30]}>
      {projectsData.map((item) => (
        <CardComponent key={uuidv4()} {...item} />
      ))}
    </Row>
  );
};

export default Projects;
