import Overview from './mdx/Overview.mdx';
import Interests from './mdx/Interests.mdx';
import { useParams } from 'react-router-dom';
import { Col } from 'antd';
const Bio = () => {
  const { file } = useParams();
  return (
  <Col className='about-container' >
      {file === 'overview' ? (
        <Overview />
      ) : file === 'interests' ? (
        <Interests />
      ) : null}
    </Col>
  );
};

export default Bio;
