import { Button, Form, Input } from 'antd';


const { TextArea } = Input;
 
const ContactForm = ({form}) => {


  return (
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
  );
};

export default ContactForm;
