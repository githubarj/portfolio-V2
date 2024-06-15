import { Button, Col, ConfigProvider, Form, Row, Typography } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import CodeDisplay from './Components/CodeDisplay';
import ContactForm from './Components/ContactForm';
import { useEffect, useState } from 'react';
import { addOpenKeys } from '../../redux/slices/navSlice';

const { Text, Title } = Typography;

const Contact = () => {
  const dispatch = useDispatch();
  const isMobile = useSelector((state) => state.layout.isMobile.value);
  const [thankYou, setThankYou] = useState(false);

  const switchThankYou = () => {
    setThankYou((prev) => !prev);
  };

  useEffect(() => {
    dispatch(addOpenKeys(['contacts', 'find-me-also-on']));
  }, []);

  const [form] = Form.useForm();

  const formValues = {
    name: Form.useWatch('name', form),
    email: Form.useWatch('email', form),
    message: Form.useWatch('message', form),
  };

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
            activeBg: '#011221',
            colorFillTertiary: '#011221',
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
          {!thankYou ? (
            <ContactForm form={form} switchThankYou={switchThankYou} />
          ) : (
            <Col className='thank-you'>
              <Title level='4'>Thank you! &#129304;</Title>
              <Text>
                Your message has been received. You will recieve answer really
                soon!
              </Text>
              <Button type='primary' onClick={switchThankYou}>
                send-a-new-message
              </Button>
            </Col>
          )}
        </Col>
        {!isMobile ? (
          <Col
            className='contact-container__code'
            xl={12}
            lg={24}
            md={24}
            sm={24}
          >
            <CodeDisplay formValues={formValues} />
          </Col>
        ) : null}
      </Row>
    </ConfigProvider>
  );
};

export default Contact;
