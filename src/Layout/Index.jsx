import { ConfigProvider, Layout } from 'antd';
import HeaderContent from './Components/HeaderContent';
import FooterContent from './Components/FooterContent';

const { Header, Footer, Sider, Content } = Layout;

const AppLayout = () => {
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
          <HeaderContent />
        </Header>
        <Layout hasSider className='app-layout__body'>
          <Sider className='body__sider'></Sider>

          <Content className='body__content'>Content</Content>
        </Layout>

        <Footer className='app-layout__footer'>
          <FooterContent />
        </Footer>
      </Layout>
    </ConfigProvider>
  );
};

export default AppLayout;
