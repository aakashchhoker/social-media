import { Form, Input, Button, Checkbox } from 'antd';
import styles from './login.module.css'
const login = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
   <>
   <div className="center">
   <div className={styles.login}>
    <h3 className={styles.title}> Welcome</h3>
    <p className={styles.p}>Welcome back! Please enter your details</p>

    <Form>
        <Input className={styles.input_one} placeholder="Username" />
        <Input className={styles.input_two} placeholder="password" />
        <Button className={styles.button} type="primary" htmlType="submit" ><a href="#">Login</a></Button>
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