import { Button, Col, Form, Input, Row } from 'antd';
import FormDisplay from './Components/FormDisplay';

const { TextArea } = Input;

const Contact = () => {
  const [form] = Form.useForm();
  const formValues = {
    name: Form.useWatch('name', form),
    email: Form.useWatch('email', form),
    message: Form.useWatch('message', form),
  };
  return (
    <Row className='contact-container' gutter={16}>
      <Col className='contact-container__form-col' xl={10} lg={24}>
        <Form
          style={{ width: '90%' }}
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
          <Button>Default Button</Button>
        </Form>
      </Col>
      <Col className='contact-container__code' xl={13} lg={0}>
        <FormDisplay formValues={formValues} />
      </Col>
    </Row>
  );
};

export default Contact;
