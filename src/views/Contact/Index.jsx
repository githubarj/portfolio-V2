import { Col, ConfigProvider, Row } from 'antd';
import { useSelector } from 'react-redux';
import CodeDisplay from './Components/CodeDisplay';
import ContactForm from './Components/ContactForm';

const Contact = () => {
  const isMobile = useSelector((state) => state.layout.isMobile.value);

  return (
    <ConfigProvider
      theme={{
        token: {
          screenXLMin: 1025,
          screenLGMax: 1024,
          colorError: '#c4756a',
          colorErrorBgHover: '#011221',
        },
        components: {
          Button: {
            contentFontSizeLG: '12',
            defaultColor: 'ffffff',
            primaryShadow: '0',
            colorPrimary: '#1C2B3A',
            colorPrimaryHover: '#334854',
          },
          Input: {
            // TODO chnage color of inactive bg of inputs to #011221 in order for phone users to see
            activeBg: '#011221',
            colorErrorBg: '#051B2B',
          },
        },
      }}
    >
      <Row className='contact-container' justify='center' gutter={16}>
        <Col
          className='contact-container__form-col'
          xl={10}
          lg={24}
          md={24}
          sm={24}
        >
          <ContactForm />
        </Col>
        {!isMobile ? (
          <Col
            className='contact-container__code'
            xl={12}
            lg={24}
            md={24}
            sm={24}
          >
            <CodeDisplay />
          </Col>
        ) : null}
      </Row>
    </ConfigProvider>
  );
};

export default Contact;
