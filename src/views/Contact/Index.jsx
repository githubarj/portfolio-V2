import { Button, Col, Form, Input, InputNumber, Row } from 'antd';
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
    <Row
      className='contact-container'
      gutter={16}
      style={{ marginTop: '30px', display: 'flex', justifyContent: 'center' }}
    >
      <Col
        style={{ display: 'flex', justifyContent: 'center' }}
        className='contact-container__form-col'
        lg={10}
        md={24}
      >
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
          <Button
            style={{ background: ' rgba(96, 123, 150, 0.88)', color: 'white' }}
          >
            Default Button
          </Button>
        </Form>
      </Col>
      <Col style={{ display: 'flex', justifyContent: 'center' }} lg={13} md={0}>
        <FormDisplay formValues={formValues} />
      </Col>
    </Row>
  );
};

export default Contact;
