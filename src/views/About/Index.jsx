import { Outlet } from 'react-router-dom';
import MDXWrapper from './MDXProvider';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addOpenKeys } from '../../redux/slices/navSlice';
import { Col } from 'antd';

const About = () => {
  const isMobile = useSelector((state) => state.layout.isMobile.value);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addOpenKeys(isMobile ? [] : ['personal-info', 'bio', 'overview']));
  }, []);
  return (
    <MDXWrapper>
      <Col className='about-container'>
        <Outlet />
      </Col>
    </MDXWrapper>
  );
};

export default About;
