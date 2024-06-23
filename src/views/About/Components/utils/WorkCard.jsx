import { Col, ConfigProvider, Flex, Typography } from 'antd';

const { Text, Title } = Typography;

function WorkCard({ title, date, icon, location, companyName, colour }) {
  const boxShadowStyle = {
    WebkitBoxShadow: `15px 15px 0px 0px ${colour}`, // for Safari and older versions of Chrome
    MozBoxShadow: `15px 15px 0px 0px ${colour}`, // for Firefox
    boxShadow: `15px 15px 0px 0px ${colour}`, // standard syntax
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Typography: {
            colorText: '#011221',
          },
        },
      }}
    >
      <Col className='work-card' style={boxShadowStyle}>
        <Flex>
          <Title level={5}> {title}</Title>
          <Text> {date} </Text>
        </Flex>
        <Flex>
          <Title level={5}>
            <img src={icon} alt='company icon' />
            {companyName}
          </Title>
          <Text> {location} </Text>
        </Flex>
        <Flex></Flex>
      </Col>
    </ConfigProvider>
  );
}

export default WorkCard;
