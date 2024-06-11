import { Col, ConfigProvider, Menu, Row, Typography } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { navTo } from '../../redux/slices/navSlice';

const { Text } = Typography;

function HeaderContent() {
  const current = useSelector((state) => state.currentPage.value); // Ensure state path is correct
  const dispatch = useDispatch();

  const items = [
    { label: '_hello', key: 'hello' },
    { label: '_about-me', key: 'about' },
    { label: '_projects', key: 'projects' },
    { label: '_contact-me', key: 'contact' },
  ];

  const handleClick = (e) => {
    dispatch(navTo(e.key));
  };

  console.log(current);

  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            horizontalItemSelectedColor: '#fff',
            activeBarBorderWidth: 1,
            activeBarHeight: 2,
          },
        },
      }}
    >
      <Row className='header-content'>
        <Col span={6} className='header-content__name'>
          <Text>githuba-jeremy</Text>
        </Col>
        <Col span={18} className='header-content__menus'>
          <Menu
            className='menu-container'
            onClick={handleClick}
            selectedKeys={[current]}
            mode='horizontal'
            items={items}
          />
         
        </Col>
      </Row>
    </ConfigProvider>
  );
}

export default HeaderContent;
