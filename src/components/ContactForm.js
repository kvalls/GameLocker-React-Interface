import { Col, Row, Button, Form, Input } from 'antd';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import React from 'react';
import { useNavigate } from "react-router-dom";
import "./ContactForm.css";

export default function ContactForm() {

  const onButtonClickHandler = () => {
    window.alert('Submitted');
  }
  
  const navigate = useNavigate();

  const { TextArea } = Input;

  const onFinish = (values) => {
    console.log('Success:', values);
    // navigate(`/home`)
    onButtonClickHandler();
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  // const Search = () => {
  //   const [showResults, setShowResults] = React.useState(false)
  //   const onClick = () => setShowResults(true)
  //   return (
  //     <div>
  //       <input type="submit" value="Search" onClick={onClick} />
  //       { showResults ? <Results /> : null }
  //     </div>
  //   )
  // }

  // const Results = () => (
  //   <div id="results">
  //     Some Results
  //   </div>
  // )
  
  // onButtonClickHandler(){
  //   window.alert('Hi');
  // }

  

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
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Message"
        name="message"
        rules={[
          {
            required: true,
            message: 'Please input your message!',
          },
        ]}
      >
        <TextArea
            placeholder="Your Message"
            rows={8}
        />
      </Form.Item>

      <Form.Item
        // wrapperCol={{
        //   offset: 8,
        //   span: 16,
        // }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>

    </Form>
    // </Row>
  );
};