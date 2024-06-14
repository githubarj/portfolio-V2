import { Col, ConfigProvider, Layout } from 'antd';
import HeaderContent from './Components/HeaderContent';
import FooterContent from './Components/FooterContent';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { resize } from '../redux/slices/navSlice';
import NavigationMenu from './Components/navigationMenu';
import { Outlet, } from 'react-router-dom';
import useRouting from '../hooks/useRouting';
import CustomBreadCrumb from './Components/CustomBreadCrumb';

const { Header, Footer, Sider, Content } = Layout;

const AppLayout = () => {
  const isMobile = useSelector((state) => state.layout.isMobile.value);

  const { pathArray } = useRouting();

  const path = pathArray[0] || '';

  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      dispatch(resize(window.innerWidth <= 576));
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [dispatch]);

  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: 'Fira Code, monospace',
          colorTextBase: '#607B96',
          colorBgBase: '#001626',
        },
        components: {
          Layout: {
            headerBg: '#001626',
            siderBg: '#001626',
            bodyBg: '#001626',
            footerBg: '#001626',
          },
          Menu: {
            itemBg: '001626',
          },
        },
      }}
    >
      <Layout className='app-layout'>
        <Header className='app-layout__header'>
          <HeaderContent isMobile={isMobile} />
        </Header>
        <Layout
          hasSider={!isMobile && path !== 'hello'}
          className='app-layout__body'
        >
          {path !== 'hello' &&
            (!isMobile ? (
              <Sider className='body__sider'>
                <NavigationMenu />
              </Sider>
            ) : (
              <NavigationMenu />
            ))}

          <Content className='body__content'>
            <CustomBreadCrumb isMobile={isMobile} pathArray={pathArray} />
            <Col className='outlet'>
              <Outlet />
            </Col>
          </Content>
        </Layout>

        <Footer className='app-layout__footer'>
          <FooterContent />
        </Footer>
      </Layout>
    </ConfigProvider>
  );
};

export default AppLayout;
