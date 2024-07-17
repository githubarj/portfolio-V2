import Overview from './Overview';

import { useParams } from 'react-router-dom';
import { Col } from 'antd';
import CodingStats from './CodeStats';
const Bio = () => {
  const { file } = useParams();
  return (
    <Col>
      {file === 'overview' ? (
        <Overview />
      ) : file === 'coding-stats' ? (
        <CodingStats />
      ) : null}
    </Col>
  );
};

export default Bio;
