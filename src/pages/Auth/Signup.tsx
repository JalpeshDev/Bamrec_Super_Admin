import React, { useState } from "react";
import { Steps, Divider } from 'antd';
import { Form, Input, InputNumber } from 'antd';
import { Typography, Row, Col, Button, Card } from "antd";
import facebookIcon from "../../assets/Images/facebook.svg"
import appleIcon from "../../assets/Images/appleIcon.svg"
import googleIcon from "../../assets/Images/google.svg"
import { Radio } from 'antd';
import Login from "./login";
const { Step } = Steps;


const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};

function Signup() {
    const onFinish = (values: any) => {
        console.log(values);
    };



    return (
        <>
            <div className="main">


                <div style={{ alignItems: 'center' }} className={"signup_steps-header"}>
                    <Steps current={1} className={"signup-steps"}>
                        <Step title="Personal Details" />
                        <Step title="PASSWORD" />
                        <Step title="Country" />
                        <Step title="Who are you?" />
                        <Step title="Complete SIGN UP" />
                    </Steps>
                </div>
                <div className="singup-container">
                    <Row>
                        <Col span={12} style={{ alignItems: "center" }}>
                            <div>
                                <h1>
                                    Sign Up
                                </h1>
                            </div>
                            <div>
                                <span>Create an account to start your application</span>
                            </div>
                            <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                                <label>First Name</label>
                                <Form.Item name={['user', 'name']} rules={[{ required: true }]}>
                                    <Input />
                                </Form.Item>
                                <label>Last Name</label>

                                <Form.Item name={['user', 'lastname']}>
                                    <Input />
                                </Form.Item>
                                <label>Email</label>
                                <Form.Item name={['user', 'email']} rules={[{ type: 'email' }]}>
                                    <Input />
                                </Form.Item>
                                <label>Phone Number</label>
                                <Form.Item name={['user', 'phonenumber']} rules={[{ type: 'number' }]}>
                                    <Input />
                                </Form.Item>
                                <Form.Item>
                                    <Radio> I have read, understand and agree to
                                        Estating's <a>Terms of Use</a> and <a>Privacy Policy</a>.
                                    </Radio>
                                </Form.Item>
                                <Form.Item>
                                    {/* wrapperCol={{ ...layout.wrapperCol, offset: 8 }} */}
                                    <Button className="signup-next-btn" type="primary" htmlType="submit">
                                        Next
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Col>
                        <Col span={12}>
                            <h3 className="social-heading">or Sign up with social accounts</h3>
                            <Row className="social-btn-group">
                                <div className="social-btn">
                                    <a href="" className="facebook-btn">
                                        <img src={googleIcon} />
                                        <span>Login with Google</span>

                                    </a>
                                </div>
                                <div className="social-btn">
                                    <a href="" className="facebook-btn">
                                        <img src={appleIcon} />
                                        <span>Login with Apple</span>
                                    </a>
                                </div>
                                <div className="social-btn">
                                    <a href="" className="facebook-btn">
                                        <img src={facebookIcon} />
                                        <span> Login with Facebook </span>
                                    </a>
                                </div>
                            </Row>
                        </Col>
                        <div className="login-pra">
                            <p>
                                Already have account?
                                <a href="/">Login</a>
                            </p>

                        </div>
                    </Row>
                </div>
            </div>
        </>
    );
}

export default Signup;