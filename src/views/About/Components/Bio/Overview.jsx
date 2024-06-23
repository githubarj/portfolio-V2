import { Col, ConfigProvider, Flex, Row, Typography } from 'antd';
import WorkCard from '../utils/WorkCard';
import { experience } from '../../Data/bio';
import { v4 as uuidv4 } from 'uuid';
const { Text, Title } = Typography;

const Overview = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Typography: {
            colorText: '#F8F9CC',
          },
        },
      }}
    >
      <Flex className='overview-container'>
        <Col className='overview-title'>
          <Title level={4}>Jeremy Richard Githuba</Title>
          <Text>Software Developer</Text>
        </Col>
        <Row>
          <Col className='overview-content' span={12}>
            Work Experience
            {experience.map((item) => (
              <WorkCard key={uuidv4()} {...item} />
            ))}
          </Col>
          <Flex></Flex>
        </Row>
      </Flex>
    </ConfigProvider>
  );
};

export default Overview;
