import { Col, Row } from 'antd';
import { Typography } from 'antd';

const { Text } = Typography;

function HeaderContent() {
  return (
    <Row className='header-content'>
      <Col span={6} className='header-content__name'>
        <Text>githuba-jeremy</Text>
      </Col>
      <Col span={16} className='header-content__menus'></Col>
    </Row>
  );
}

export default HeaderContent;
