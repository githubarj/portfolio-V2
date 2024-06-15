import { Button, Form, Input } from 'antd';
import emailjs from '@emailjs/browser';

const { TextArea } = Input;

const ContactForm = ({ form, switchThankYou }) => {
  // TODO fix the email js functionality and implement the thank you for message page

  const sendEmail = (values) => {
    // e.preventDefault();
    console.log(values);
    emailjs
      .sendForm('service_y9j6qq2', 'template_3enmvkg', values, {
        publicKey: 'yeT6mDoMNVA7sdQmZ',
      })

      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <Form
      onFinish={sendEmail}
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
