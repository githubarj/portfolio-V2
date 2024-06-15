import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addOpenKeys } from '../../redux/slices/navSlice';
import { Col, Row } from 'antd';
import CardComponent from './Components/CardComponent';
import { Md10K } from 'react-icons/md';

const Projects = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addOpenKeys(['projects']));
  }, []);

  // TODO restrict the view width so stop rocking and prevent body being scrollable

  const layout = {
    lg: 8,
    md: 12,
    sm: 24,
    xs: 24,
  };

  return (
    <Row className='projects-container' gutter={16}>
      <Col className='projects-container__columns' {...layout}>
        <CardComponent />
      </Col>
    </Row>
  );
};

export default Projects;
