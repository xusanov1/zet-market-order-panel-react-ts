import { FC } from 'react';
import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useNavigate } from 'react-router';
import './_style.scss';

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const index: FC = () => {
  const navigate = useNavigate();
  return (
    <section className="sign-in">
      <div className="wrapper">
        <div className="logo">
          <img width={45} src="/z-logo.png" alt="logo" />
          <p className="title">zetmarket b2b</p>
        </div>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className="form"
        >
          <Form.Item<FieldType>
            name="username"
            className="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input className="username" size="large" placeholder="Phone" />
          </Form.Item>

          <Form.Item<FieldType>
            name="password"
            rules={[{ required: true, message: 'Please input your username!' }]}
            className="password"
          >
            <Input.Password
              className="username"
              size="large"
              placeholder="Password"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Form.Item>

          <Form.Item>
            <Button
              onClick={() => navigate('/')}
              className="sign_btn"
              type="primary"
              htmlType="submit"
            >
              Sign In
            </Button>
          </Form.Item>
        </Form>
      </div>
      <img width={500} src="/final.png" alt="magic-pattern" />
    </section>
  );
};

export default index;
