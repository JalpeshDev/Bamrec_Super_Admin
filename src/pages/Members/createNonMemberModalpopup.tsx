import React from 'react'
import { Input, Row, Col, InputNumber, Button, Modal, Form, Select, Checkbox, Typography } from "antd";
import { CloseOutlined, SolutionOutlined, ContactsOutlined } from '@ant-design/icons';

const CreateMemberModalpopup = (props: any) => {
  const [form] = Form.useForm();
  const { Option } = Select;
  const { isAddNonMemberModal, setIsAddNonMemberModal } = props;

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const onFinish = (values: any) => {
    console.log('Success:', values);
    setIsAddNonMemberModal(false)
  };

  return (
    <Modal
      closable={false}
      footer={null}
      width={1000}
      visible={isAddNonMemberModal}
      onCancel={() => setIsAddNonMemberModal(false)}>
      <div>
        <Row>
          <Col span={23}>
            <Row >
              <Col span={1}>
                <SolutionOutlined style={{ fontSize: '35px' }} />
              </Col>
              <Col span={23}>
                <Typography className={'title-fontStyle '}>
                  NON-MEMBER
                </Typography>
              </Col>
            </Row>
          </Col>
          <Col span={1}>
            <Button icon={<CloseOutlined />} onClick={() => { setIsAddNonMemberModal(false) }}>
            </Button>
          </Col>
        </Row>
      </div>
      <div className={'margin-20'}>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col span={5}>
              <div style={{ overflow: 'hidden' }}>
                <Form.Item
                  name="firstName"
                  label="FirstName"
                  style={{ fontWeight: 500 }}
                  rules={[{ required: true, message: 'Please input your firstname!' }]}
                >
                  <Input />
                </Form.Item>
              </div>
            </Col>
            <Col span={5}>
              <div style={{ overflow: 'hidden' }}>
                <Form.Item
                  name="lastName"
                  label="LastName"
                  style={{ fontWeight: 500 }}
                  rules={[{ required: true, message: 'Please input your lastname!' }]}
                >
                  <Input />
                </Form.Item>
              </div>
            </Col>
            <Col span={4}>
              <div style={{ overflow: 'hidden' }}>
                <Form.Item
                  name="link"
                  label="link"
                  style={{ fontWeight: 500 }}
                  rules={[{ required: true, message: 'Please select link!' }]}
                >
                  <Select placeholder="select">
                    <Option value="single">Single</Option>
                    <Option value="married">Married</Option>
                  </Select>
                </Form.Item>
              </div>
            </Col>
            <Col span={4}>
              <div style={{ overflow: 'hidden' }}>
                <Form.Item
                  name="telephone"
                  label="#Telephone"
                  style={{ fontWeight: 500 }}
                  rules={[
                    {
                      pattern: new RegExp(/^[0-9]+$/),
                      type: "regexp",
                      message: "Value should contain just number",
                    },
                    {
                      required: true,
                      message: "Value should be less than 50 character",
                    },
                  ]}
                >
                  <InputNumber
                    type="number"
                    style={{ width: '100%' }} />
                </Form.Item>
              </div>
            </Col>
            <Col span={4}>
              <div style={{ overflow: 'hidden' }}>
                <Form.Item name="remember" valuePropName="checked"
                  rules={[
                    {
                      validator: (_, value) =>
                        value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                    },
                  ]}>
                  <Checkbox>
                    Urgent contact</Checkbox>
                </Form.Item>
              </div>
            </Col>
          </Row>
          <div>
            <Row justify="center" align="middle">
              <Col>
                <Form.Item >
                  <Button type="primary" htmlType="submit" icon={<ContactsOutlined />}>
                    Add
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </div>
        </Form>
      </div>

    </Modal>
  )
}

export default CreateMemberModalpopup;