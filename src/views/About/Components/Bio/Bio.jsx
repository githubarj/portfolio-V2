import Overview1 from './mdx/Overview1.mdx';
import Overview from './Overview';

import Interests from './mdx/Interests.mdx';
import { useParams } from 'react-router-dom';
import { Col } from 'antd';
const Bio = () => {
  const { file } = useParams();
  return (
    <Col >
      {file === 'overview' ? (
        <Overview1 />
      ) : file === 'interests' ? (
        <Overview />
      ) : null}
    </Col>
  );
};

export default Bio;
