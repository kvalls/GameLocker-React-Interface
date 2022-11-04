import { Col, Row, Button, Checkbox, Form, Input } from 'antd';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import React, { useContext, useEffect } from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from '../App';
import "./LoginForm.css";

export default function LoginForm() {
  const [log, setLog] = useContext(LoginContext);

  const navigate = useNavigate();

  // const [log, setLog] = useState(0);

  useEffect((()=>console.log('message',log)));

  const onFinish = (values) => {
    
    console.log('Success:', values);
    setLog(1)
    navigate(`/library`)
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    // <Row justify="center">
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        // wrapperCol={{
        //   offset: 8,
        //   span: 16,
        // }}
      >
        <Checkbox className="Check">Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        // wrapperCol={{
        //   offset: 8,
        //   span: 16,
        // }}
      >
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
      <Form.Item
        // wrapperCol={{
        //   offset: 8,
        //   span: 16,
        // }}
      >
        <Button  type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>

    </Form>
    
    // </Row>
  );
};