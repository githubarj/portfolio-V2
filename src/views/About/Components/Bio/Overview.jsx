import { Col, ConfigProvider, Flex, Row, Typography } from 'antd';
import { MdPhone, MdOutlineEmail } from 'react-icons/md';
import { GoMail } from 'react-icons/go';
import WorkCard from '../utils/WorkCard';
import { education, experience, skills } from '../../Data/bio';
import { v4 as uuidv4 } from 'uuid';
import AltCard from '../utils/AltCard';
const { Text, Title } = Typography;

const Overview = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Typography: {
            colorText: '#F8F9CC',
            colorTextHeading: '#F8F9CC',
          },
        },
      }}
    >
      <Flex className='overview-container' vertical gap='large'>
        <Col className='overview-title'>
          <Title level={1} style={{ marginBottom: '0px', marginTop: '20px' }}>
            Githuba Jeremy Richard
          </Title>
          <Title
            level={4}
            style={{ marginTop: '0px', fontWeight: 500, marginBottom: '20px' }}
          >
            Software Developer
          </Title>
          <Flex vertical>
            <Text
              style={{
                fontWeight: 300,
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <MdPhone /> 0798320724
            </Text>
            <Text
              style={{
                fontWeight: 300,
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <MdOutlineEmail /> githuba9520@gmail.com
            </Text>
          </Flex>
        </Col>
        <Row gutter={50}>
          <Col className='overview-content' lg={24} xl={14}>
            <Title level={5} style={{ fontWeight: 500 }}>
              Work Experience
            </Title>
            {experience.map((item) => (
              <WorkCard key={uuidv4()} {...item} />
            ))}
          </Col>

          <Col className='overview-content' lg={24} xl={10}>
            <Title level={5} style={{ fontWeight: 500 }}>
              Education
            </Title>
            {education.map((item) => (
              <AltCard key={uuidv4()} {...item} />
            ))}
            <Title level={5} style={{ fontWeight: 500 }}>
              Skills
            </Title>
            {skills.map((item) => (
              <AltCard key={uuidv4()} {...item} />
            ))}
          </Col>
          
        </Row>
      </Flex>
    </ConfigProvider>
  );
};

export default Overview;
