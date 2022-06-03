import React, { useState } from "react";
import { Typography, Form, Row, Col, Input, Checkbox, Button, Tabs, message } from "antd";
import { UserOutlined, LockOutlined, GlobalOutlined } from '@ant-design/icons';
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router";
import { useDispatch } from 'react-redux';
import Dashboard from "../Dashboard";
import bamreclogo from "../../assets/Images/bamrec-logo.svg"
import facebookIcon from "../../assets/Images/facebook.svg"
import appleIcon from "../../assets/Images/appleIcon.svg"
import googleIcon from "../../assets/Images/google.svg"
import Signup from "./Signup";


const Login = () => {
    const { t, i18n, } = useTranslation();
    const dispatch = useDispatch();
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [errormsg, setErrormsg] = useState('')
    const history = useHistory();
    const loginData = {
        userId: "admin@gmail.com",
        password: "admin@123"
    }
    const [form] = Form.useForm();
    const success = () => {
        message.success('Login Sucessfully. !');
    };
    const error = () => {
        message.error('This is an error message');
    };
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
        console.log("Email,password", email, password);
        if (loginData.userId == values.email && loginData.password == values.password) {
            history.push(`/Dashboard`)
        }
        else {

            alert("Invalid UserName and Password")

        }
    };
    return (
        <>
            <div className={'login-form-container'}>
                <Row style={{ width: "100%" }} >
                    <Col md={24} lg={10} xl={10} style={{ background: "#fff" }} >
                        <div className="left-login-form">
                            <div>
                                <Row>
                                    <Col>
                                        <Typography className={'title-fontStyle text-center'}>
                                            <img src={bamreclogo} />
                                        </Typography>
                                    </Col>
                                </Row>
                            </div>
                            <div className={'margin-20'}>
                                <a>
                                    <h1>
                                        <b>
                                            Hi, Welcome back!
                                        </b>
                                    </h1>
                                </a>
                                <div>
                                    <Form
                                        form={form}
                                        name="register"
                                        onFinish={onFinish}
                                    >
                                        <span>Email</span>
                                        <Form.Item
                                            name="email"

                                            rules={[
                                                {
                                                    type: 'email',
                                                    message: 'The input is not valid E-mail!',
                                                },
                                                {
                                                    required: true,
                                                    message: 'Please input your E-mail!',
                                                },
                                            ]}
                                        >
                                            <Input />
                                        </Form.Item>
                                        <span>Password</span>
                                        <Form.Item
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
                                        <Form.Item>
                                            <Button type="primary" htmlType="submit" className="login-form-button">
                                                <span style={{ color: "white", fontSize: "14px", alignItems: "center" }}>Login</span>
                                            </Button>
                                        </Form.Item>
                                        <div className="break-line">
                                            or
                                        </div>

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
                                        <Row className="text-center signup-link" justify="center">
                                            <p>Don’t have account? <a href="/Signup">Sign Up</a></p>
                                            <Button>

                                            </Button>

                                        </Row>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={24} lg={14} xl={14}>
                        <div className="right-col-blue">

                        </div>
                    </Col>

                </Row>
            </div>
        </>
    )

}

export default Login;