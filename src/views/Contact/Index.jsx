import { Button, Col, ConfigProvider, Form, Input, Row } from 'antd';
import FormDisplay from './Components/FormDisplay';
import { useSelector } from 'react-redux';
import { ThemeProvider } from '@emotion/react';

const { TextArea } = Input;

const Contact = () => {
  const isMobile = useSelector((state) => state.layout.isMobile.value);
  const [form] = Form.useForm();

  const formValues = {
    name: Form.useWatch('name', form),
    email: Form.useWatch('email', form),
    message: Form.useWatch('message', form),
  };
  return (
    <ConfigProvider
      theme={{
        token: { screenXLMin: 1025, screenLGMax: 1024 },
        components: {
          Button: {
            contentFontSizeLG: '12',
            defaultBg: '#1C2B3A',
            defaultColor: 'ffffff',
            primaryShadow: '0',
            colorPrimary: '#1C2B3A',
            colorPrimaryHover: '#334854',
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
          <Form
            size='large'
            form={form}
            variant='filled'
            requiredMark='hidden'
            layout='vertical'
            autoComplete='off'
          >
            <Form.Item name='name' label='_name :'>
              <Input />
            </Form.Item>
            <Form.Item name='email' label='_email :'>
              <Input />
            </Form.Item>
            <Form.Item name='message' label='_message :'>
              <TextArea rows={4} />
            </Form.Item>
            <Form.Item>
              <Button type='primary' htmlType='submit'>
                submit-message
              </Button>
            </Form.Item>
          </Form>
        </Col>
        {!isMobile ? (
          <Col
            className='contact-container__code'
            xl={12}
            lg={24}
            md={24}
            sm={24}
          >
            <FormDisplay formValues={formValues} />
          </Col>
        ) : null}
      </Row>
    </ConfigProvider>
  );
};

export default Contact;
