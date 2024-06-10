import { Button, Col, Flex, Row } from 'antd';
import { Typography } from 'antd';

const { Text } = Typography;

function HeaderContent() {
  return (
    <Row className='header-content'>
      <Col span={4} className='header-content__name'>
        <Text level={5}>Githuba R Jeremy</Text>
      </Col>
      <Col span={19} className='header-content__menus'></Col>
    </Row>
  );
}

export default HeaderContent;
