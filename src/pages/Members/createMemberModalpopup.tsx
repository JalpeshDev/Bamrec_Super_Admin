import React, { useState } from 'react'
import { Typography, Row, Col, Button, Modal, Checkbox, Form, Select } from "antd";
import { CloseOutlined, SolutionOutlined, ContactsOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import subMember from '../../Redux/SubMember/action';

const CreateMemberModalpopup = (props: any) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { Option } = Select;
  const { isAddMemberModal, setIsAddMemberModal } = props;

  const onFinish = (values: any) => {
    console.log('Success:', values);
    dispatch(subMember.createSubMember(values));
    setIsAddMemberModal(false);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Modal
      closable={false}
      footer={null}
      width={1000}
      visible={isAddMemberModal}
      onCancel={() => setIsAddMemberModal(false)}>
      <div className={'margin-20'}>
        <Row>
          <Col span={23}>
            <Row >
              <Col span={1}>
                <SolutionOutlined style={{ fontSize: '35px' }} />
              </Col>
              <Col span={23}>
                <Typography className={'title-fontStyle '}>
                  MEMBER
                </Typography>
              </Col>
            </Row>
          </Col>
          <Col span={1}>
            <Button icon={<CloseOutlined />} onClick={() => { setIsAddMemberModal(false) }}>
            </Button>
          </Col>
        </Row>
        <div className={'margin-20'}>
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Row justify='space-between'>
              <Col span={7}>
                <Form.Item
                  name="member"
                  label="Member"
                  style={{ fontWeight: 500 }}
                  rules={[{ required: true, message: 'Member is required' }]}
                >
                  <Select placeholder="Select a member">
                    <Option value="france">France</Option>
                    <Option value="india">India</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={7}>
                <Form.Item
                  name="link"
                  label="Link"
                  style={{ fontWeight: 500 }}
                  rules={[{ required: true, message: 'Link is required' }]}
                >
                  <Select placeholder="Select">
                    <Option value="france">France</Option>
                    <Option value="india">India</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={7}>
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
      </div>
    </Modal>
  )
}

export default CreateMemberModalpopup;
