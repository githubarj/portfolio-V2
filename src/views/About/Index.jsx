import { Outlet } from 'react-router-dom';
import MDXWrapper from './MDXProvider';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addOpenKeys } from '../../redux/slices/navSlice';

const About = () => {
  const isMobile = useSelector((state) => state.layout.isMobile.value);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addOpenKeys(isMobile ? [] : ['personal-info', 'bio', 'overview']));
  }, []);
  return (
    <MDXWrapper>
      <div style={{ padding: '5px 15px' }}>
        <Outlet />
      </div>
    </MDXWrapper>
  );
};

export default About;
