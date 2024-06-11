import { Col, ConfigProvider, Dropdown, Menu, Row, Typography } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { navTo } from '../../redux/slices/navSlice';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useEffect, useState } from 'react';

const { Text } = Typography;

function HeaderContent() {
  const current = useSelector((state) => state.currentPage.value); // Ensure state path is correct
  const dispatch = useDispatch();
  const [burgerMenu, setBurgerMenu] = useState(window.innerWidth <= 581);

  useEffect(() => {
    const handleResize = () => {
      setBurgerMenu(window.innerWidth <= 581);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
        <Col
          sm={6}
          xs={20}
          className={`header-content__name ${burgerMenu && 'no-border'}`}
        >
          <Text>githuba-jeremy</Text>
        </Col>
        <Col
          sm={18}
          xs={4}
          className={`header-content__menus ${burgerMenu && 'burger'}`}
        >
          {burgerMenu ? (
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
