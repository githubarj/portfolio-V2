import { Col, ConfigProvider, Flex, Typography } from 'antd';

const { Text, Title } = Typography;

function WorkCard({ title, date, logo, location, companyName, colour }) {
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
            colorTextHeading: '#010C15',
          },
        },
      }}
    >
      <Col className='work-card' style={boxShadowStyle}>
        <Flex justify='space-between' align='center'>
          <Text strong> {title}</Text>
          <Text style={{ fontSize: '12px' }}> {date} </Text>
        </Flex>
        <Flex gap='middle' align='center'>
          <Flex gap='small' align='center'>
            <img src={logo} alt='company icon' style={{ width: '24px' }} />
            <Title style={{ margin: '0px' }} level={5}>
              {companyName}
            </Title>
          </Flex>
          <Text style={{ fontSize: '12px' }}> {location} </Text>
        </Flex>
        <Flex></Flex>
      </Col>
    </ConfigProvider>
  );
}

export default WorkCard;
