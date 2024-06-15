import { Button, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setFormValues } from '../../../redux/slices/contactInfoSlice';
import { useEffect } from 'react';

const { TextArea } = Input;

const ContactForm = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const formValues = {
    name: Form.useWatch('name', form),
    email: Form.useWatch('email', form),
    message: Form.useWatch('message', form),
  };

  useEffect(() => {
    dispatch(setFormValues(formValues));

  }, [formValues, dispatch]);

 


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
