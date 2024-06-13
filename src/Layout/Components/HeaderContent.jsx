import { Col, ConfigProvider, Dropdown, Menu, Row, Typography } from 'antd';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useLocation, useNavigate } from 'react-router-dom';

const { Text } = Typography;

function HeaderContent({ isMobile }) {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.slice(1);

  const items = [
    { label: '_hello', key: 'hello' },
    { label: '_about-me', key: 'about' },
    { label: '_projects', key: 'projects' },
    { label: '_contact-me', key: 'contact-me' },
  ];

  const handleClick = (e) => {
    navigate(e.key);
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
              selectedKeys={[path]}
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
