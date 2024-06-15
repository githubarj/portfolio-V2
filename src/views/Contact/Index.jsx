import { Col, ConfigProvider, Form, Row } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import CodeDisplay from './Components/CodeDisplay';
import ContactForm from './Components/ContactForm';
import { useEffect } from 'react';
import { addOpenKeys } from '../../redux/slices/navSlice';

const Contact = () => {
  const dispatch = useDispatch();
  const isMobile = useSelector((state) => state.layout.isMobile.value);

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
          <ContactForm form={form} />
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
