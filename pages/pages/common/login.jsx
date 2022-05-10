import { Form, Input, Button, Checkbox, message } from 'antd';
import styles from './login.module.css'
import Link from 'next/link';
import axios from 'axios';
import register from './register';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router'

const login = () => {
  const router = useRouter()

  const [user, setUser] = React.useState({})

  const onFinish = async (values) => {
    console.log('Success:', values);

    await loginHere(values.username, values.password)


  };

  const loginHere = async (username, password) => {
    await axios.post('http://localhost:1337/api/auth/local', {
      identifier: username,
      password: password,
    }).then((res) => {
      setUser(res)
      console.log('logged in , res', res)
    }).catch((err) => { setUser(null), console.log('User Not Found', err) })
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  useEffect(() => {
    if (user?.status === 200) {
      router.push('/pages/dashboard')
    }
    else { router.push('/') }
  }, [user])

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

            <Button type="primary" htmlType="submit" className='buttonD' > Login </Button>

            <Link href={`/pages/common/register`} >
              <Button className='buttonD'  >Register</Button>
            </Link>
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

export default login;