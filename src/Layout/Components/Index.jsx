import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const AppLayout = () => {
  return (
    <Layout>
      <Header>Header</Header>
      <Layout>
        <Sider width='25%'>Sider</Sider>
        <Content>Content</Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default AppLayout;
