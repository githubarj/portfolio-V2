import { Button, Col, ConfigProvider, Form, Input, Row } from 'antd';
import { useSelector } from 'react-redux';
import CodeDisplay from './Components/CodeDisplay';

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
          <Form
            scrollToFirstError
            size='large'
            form={form}
            variant='filled'
            requiredMark='hidden'
            layout='vertical'
            autoComplete='off'
          >
            <Form.Item
              name='name'
              label='_name :'
              requiredMark='hidden'
              rules={[
                {
                  required: true,
                  message: '_name should have a value!',
                },
              ]}
            >
              <Input allowClear />
            </Form.Item>
            <Form.Item
              name='email'
              label='_email :'
              rules={[
                {
                  required: true,
                  message: '_email should have a value!',
                },
                {
                  type: 'email',
                  message: 'enter a valid email',
                },
              ]}
            >
              <Input allowClear />
            </Form.Item>
            <Form.Item
              name='message'
              label='_message :'
              rules={[
                {
                  required: true,
                  message: '_message should have a value!',
                },
              ]}
            >
              <TextArea allowClear rows={4} />
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
            <CodeDisplay formValues={formValues} />
          </Col>
        ) : null}
      </Row>
    </ConfigProvider>
  );
};

export default Contact;
