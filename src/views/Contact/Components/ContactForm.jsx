import { Button, Form, Input, message } from 'antd';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

const { TextArea } = Input;

const ContactForm = ({ form, switchThankYou }) => {
  // TODO fix the email js functionality and implement the thank you for message page and move the sucess func
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Message sent sucessfully',
    });
  };

  const sendEmail = (values) => {
    setLoading(true);
    const templateParams = {
      name: values.name,
      email: values.email,
      message: values.message,
    };

    emailjs
      .send(
        'service_y9j6qq2',
        'template_w9xijeq',
        templateParams,
        'yeT6mDoMNVA7sdQmZ'
      )
      .then(
        () => {
          console.log('SUCCESS!');
          success();
          if (switchThankYou) switchThankYou();
          setLoading(false);
        },
        (error) => {
          setLoading(false);
          console.log('FAILED...', error.text);
          messageApi.open({
            type: 'error',
            content: 'Failed to send message: ' + error.text,
          });
        }
      );
  };

  return (
    <>
      {contextHolder}
      <Form
        clearOnDestroy
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
          <Button type='primary' htmlType='submit' loading={loading}>
            submit-message
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default ContactForm;
