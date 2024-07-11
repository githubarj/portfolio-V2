import { Outlet } from 'react-router-dom';
import MDXWrapper from './MDXProvider';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addOpenKeys } from '../../redux/slices/navSlice';
import { Col } from 'antd';
import { motion } from 'framer-motion';

const About = () => {
  const isMobile = useSelector((state) => state.layout.isMobile.value);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addOpenKeys(isMobile ? [] : ['personal-info', 'bio', 'overview']));
  }, []);
  return (
    
      <motion.div
        key='about-page'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <MDXWrapper>
          <Col className='about-container'>
            <Outlet />
          </Col>
        </MDXWrapper>
      </motion.div>
   
  );
};

export default About;
