import { Card, ConfigProvider } from 'antd';
import { FaEye, FaLink } from 'react-icons/fa6';

const { Meta } = Card;

const CardComponent = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Card: {
            colorBorderSecondary: 'none',
          },
        },
      }}
    >
      <Card
        className='projects-card
        '
        hoverable
        type='inner'
        style={{
          width: '100%',
        }}
        cover={
          <img
            alt='example'
            src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
          />
        }
        actions={[<FaLink key='setting' />, <FaEye key='edit' />]}
      >
        <Meta title='Card title' description='This is the description' />
      </Card>
    </ConfigProvider>
  );
};

export default CardComponent;
