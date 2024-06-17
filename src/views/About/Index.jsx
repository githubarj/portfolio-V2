import { Outlet } from 'react-router-dom';
import MDXWrapper from './MDXProvider';

const About = () => {
  return (
    <MDXWrapper>
      <div style={{ padding: '5px 15px' }}>
        About
        <Outlet />
      </div>
    </MDXWrapper>
  );
};

export default About;
