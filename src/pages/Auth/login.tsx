import React from "react";
import { Typography, Form, Row, Col, Input, Checkbox, Button, Tabs } from "antd";
import { UserOutlined, LockOutlined, GlobalOutlined } from '@ant-design/icons';
import { useTranslation } from "react-i18next";
import { useDispatch } from 'react-redux';
import authActions from '../../Redux/Auth/action'

const { TabPane } = Tabs;

const Login = () => {
    const { t, i18n, } = useTranslation();
    const dispatch = useDispatch();

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
        dispatch(authActions.loginRequest(values))
    };

    return (
        <>
            <div className={'lang-icon-block'}>
            </div>
            <div className={'login-form-container'}>
                <div>
                    <Row justify="center" align="middle">
                        <Col>
                            <Typography className={'title-fontStyle text-center'}>
                                BAMREC ADMIN
                            </Typography>
                        </Col>
                    </Row>
                </div>
                <div className={'margin-20'}>
                    <Row justify="center" align="middle">
                        <Tabs >
                            <TabPane tab="IDENTIFIANTS" key="1">
                                <Form
                                    name="normal_login"
                                    className="login-form"
                                    initialValues={{ remember: true }}
                                    onFinish={onFinish}
                                >
                                    <Form.Item
                                        name="username"
                                        rules={[{ required: true, message: 'Please input your Username!' }]}
                                    >
                                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                                    </Form.Item>
                                    <Form.Item
                                        name="email"
                                        rules={[{ required: true, message: 'Please input your Email!' },
                                        { type: "email", message: 'Please input valid Email' }]}
                                    >
                                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
                                    </Form.Item>
                                    <Form.Item
                                        name="password"
                                        rules={[{ required: true, message: 'Please add a password' },
                                        { min: 6, message: 'Password must have a minimum length of 6' },
                                            // {
                                            //     pattern: new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'),
                                            //     message: 'Password must contain at least one lowercase letter, uppercase letter, number, and special character'
                                            // }
                                        ]}
                                    >
                                        <Input
                                            prefix={<LockOutlined className="site-form-item-icon" />}
                                            type="password"
                                            placeholder="Password"
                                        />
                                    </Form.Item>
                                    <Form.Item>
                                        <Form.Item name="remember" valuePropName="checked" noStyle>
                                            <Checkbox>Remember me</Checkbox>
                                        </Form.Item>

                                        <a className="login-form-forgot" href="">
                                            Forgot password
                                        </a>
                                    </Form.Item>

                                    <Form.Item>
                                        <Button type="primary" htmlType="submit" className="login-form-button">
                                            Log in
                                        </Button>

                                    </Form.Item>
                                </Form>
                            </TabPane>
                        </Tabs>
                    </Row>
                </div>
                <div className={'margin-20'}>
                    <Row justify="center" align="middle">

                    </Row>
                </div>
            </div>
            <div className={'login-footer'}>
                <Typography>
                    System state
                </Typography>
                <Typography className={'sub-heading'}>

                    Daven Martel,{new Date().getFullYear()}. All rights reserved
                </Typography>
            </div>
        </>
    )

}

export default Login;