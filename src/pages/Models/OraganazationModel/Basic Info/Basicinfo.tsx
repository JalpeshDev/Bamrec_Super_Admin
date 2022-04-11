import React, { useState } from 'react';
import {
    Form,
    Button,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
    Card,
    Row,
    Input,
    Col,
} from 'antd';
import { Layout } from 'antd';
type SizeType = Parameters<typeof Form>[0]['size'];

const Basicinfo = ({ match, Visible }: any) => {
    const onFinish = (values: any) => {
        console.log(values);
    };
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
    return (
        <Layout>
            <Card>
                <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                    <Row>
                        <Col>
                            <label>Name</label>
                            <Form.Item name={['user', 'name']}  rules={[{ required: true }]}>
                                <Input placeholder=' Organazations Name'/>
                            </Form.Item>    
                        </Col>
                    </Row>
                    
                    <Row gutter={24}>        
                        <Col span={12}>
                            <label>Admin FirstName</label>
                       <Form.Item colon={false}>
                            <Input placeholder="Admin FirstName"/>
                        </Form.Item>
                        </Col>
                        <Col span={12}>
                        <label>Admin Last Name</label>
                        <Form.Item colon={false}>
                            <Input placeholder="Admin Last Name"/>
                        </Form.Item>
                        </Col>
                    </Row>
                    <Form.Item name={['user', 'website']} label="Website">
                        <Input />
                    </Form.Item>
                    <Form.Item name={['user', 'introduction']} label="Introduction">
                        <Input.TextArea />
                    </Form.Item>
                    {/* <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item> */}
                </Form>
            </Card>
           
        </Layout>
    );
};
export default Basicinfo;
