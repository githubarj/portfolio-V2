import { Outlet } from 'react-router-dom';

const About = () => {
  return (
    <div style={{padding: '5px 15px'}} >
      About
      <Outlet />
    </div>
  );
};

export default About;
