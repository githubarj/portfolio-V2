import { Col, ConfigProvider, Dropdown, Menu, Row, Typography } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { navTo } from '../../redux/slices/navSlice';
import { RxHamburgerMenu } from 'react-icons/rx';

const { Text } = Typography;

function HeaderContent({ isMobile }) {
  const current = useSelector((state) => state.layout.currentPage.value);
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
        <Col
          sm={5}
          xs={20}
          className={`header-content__name ${isMobile && 'no-border'}`}
        >
          <Text>githuba-jeremy</Text>
        </Col>
        <Col
          sm={19}
          xs={4}
          className={`header-content__menus ${isMobile && 'burger'}`}
        >
          {isMobile ? (
            <Dropdown
              trigger={['click']}
              menu={{ items, selectable: true, defaultSelectedKeys: ['hello'] }}
              placement='bottomRight'
              arrow={{ pointAtCenter: true }}
            >
              <RxHamburgerMenu fontSize={24} />
            </Dropdown>
          ) : (
            <Menu
              className='menu-container'
              onClick={handleClick}
              selectedKeys={[current]}
              mode='horizontal'
              items={items}
            />
          )}
        </Col>
      </Row>
    </ConfigProvider>
  );
}

export default HeaderContent;
