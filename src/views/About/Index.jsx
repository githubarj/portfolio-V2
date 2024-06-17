import { Outlet } from 'react-router-dom';
import MDXWrapper from './MDXProvider';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  addOpenKeys,
  initializeSelectedKeys,
} from '../../redux/slices/navSlice';

const About = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addOpenKeys(['personal-info', 'bio']));
    dispatch(initializeSelectedKeys(['personal-info', 'bio', 'overview']));
  }, [dispatch]);

  return (
    <MDXWrapper>
      <div style={{ padding: '5px 15px' }}>
        <Outlet />
      </div>
    </MDXWrapper>
  );
};

export default About;
