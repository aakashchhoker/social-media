import { Form, Input, Button, Checkbox, message } from 'antd';
import styles from './login.module.css'
import Link from 'next/link';
import axios from 'axios';
import { addUser } from '../../api/hello';


const register = () => {
  const onFinish = async (values) => {
    console.log('Success:', values);

    addUser({
      username: values.username,
      password: values.password,
      email: values.email
    }).then((res) => {
      console.log('user created successfullly', res)
    }).catch((err) => { console.log('got an error', err) })

  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <div className="center">
        <div className='registerContainer'>
          <h3 > Welcome</h3>
          <p >Welcome back! Please enter your details</p>

          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              name="username"

            >
              <Input className='inputD' placeholder='Username' />
            </Form.Item>

            <Form.Item
              name="password"
            >
              <Input className='inputD' placeholder='Password' />
            </Form.Item>
            <Form.Item
              name="email"
            >
              <Input  className='inputD' placeholder='Email' />
            </Form.Item>

            <Button type="primary" className='buttonD' htmlType="submit" > Sign Up</Button>
          </Form>

        </div>
        <div >
        </div>
        <svg
          className="m-0 p-0 position-fixed left-0 bottom-0 w-100 right-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#0099ff"
            fillOpacity="1"
            d="M0,192L240,256L480,224L720,160L960,288L1200,224L1440,96L1440,320L1200,320L960,320L720,320L480,320L240,320L0,320Z"
          ></path>
        </svg>
      </div>
    </>

  );
};

export default register;