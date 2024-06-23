import Overview from './Overview';

import Interests from './mdx/Interests.mdx';
import { useParams } from 'react-router-dom';
import { Col } from 'antd';
const Bio = () => {
  const { file } = useParams();
  return (
    <Col>
      {file === 'overview' ? (
        <Overview />
      ) : file === 'interests' ? (
        <Interests />
      ) : null}
    </Col>
  );
};

export default Bio;
