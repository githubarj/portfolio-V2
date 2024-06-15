import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addOpenKeys } from '../../redux/slices/navSlice';
import { Col, Row } from 'antd';
import CardComponent from './Components/CardComponent';

const Projects = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addOpenKeys(['projects']));
  }, []);

  // TODO restrict the view width so stop rocking and prevent body being scrollable

  return (
    <Row className='projects-container' gutter={30} >
      <Col className='projects-container__columns'  >
        <CardComponent />
      </Col>
    </Row>
  );
};

export default Projects;
