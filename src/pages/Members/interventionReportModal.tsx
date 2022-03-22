import React from 'react'
import { Modal, Checkbox, Typography, Input, Row, Col, Select, Form, Button } from "antd";
import { CloseOutlined, SolutionOutlined } from '@ant-design/icons';
import UserAddOutlined from '@ant-design/icons/lib/icons/UserAddOutlined';
import ContainerOutlined from '@ant-design/icons/lib/icons/ContainerOutlined';

const InterventionReportModal = (props: any) => {
  const [form] = Form.useForm();
  const { isInterventionModalVisible, setIsInterventionModalVisible } = props;
  const { Option } = Select;

  const onChange = (checkedValues: any) => {
    console.log('checked = ', checkedValues);
  }

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (

    <>
      <Modal
        closable={false}
        footer={null}
        width={1000}
        visible={isInterventionModalVisible}
        onCancel={() => setIsInterventionModalVisible(false)}>
        <div className={'margin-20'}>
          <Row>
            <Col span={23}>
              <Row >
                <Col span={1}>
                  <ContainerOutlined style={{ fontSize: '35px' }} />
                </Col>
                <Col span={23}>
                  <Typography className={'title-fontStyle '}>
                    INTERVENTION REPORT
                  </Typography>
                </Col>
              </Row>
            </Col>
            <Col span={1}>
              <Button icon={<CloseOutlined />} onClick={() => { setIsInterventionModalVisible(false) }}>
              </Button>
            </Col>
          </Row>
          <div className={'margin-20'}>
            <Row>
              <Col span={1}>
                <SolutionOutlined style={{ fontSize: '30px' }} />
              </Col>
              <Col span={23}>
                <Typography className={'font-title-member '}>
                  INFORMATIONS
                </Typography>
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
              <Row justify='space-between'>
                <Col span={7}>
                  <Form.Item
                    name="nature"
                    label="Nature"
                    style={{ fontWeight: 500 }}
                    rules={[{ required: true, message: 'Nature is required' }]}
                  >
                    <Select placeholder="Select">
                      <Option value="france">France</Option>
                      <Option value="india">India</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={7}>
                  <Form.Item
                    name="site"
                    label="Site"
                    style={{ fontWeight: 500 }}
                    rules={[{ required: true, message: 'Please select Site!' }]}
                  >
                    <Select placeholder="Select">
                      <Option value="france">France</Option>
                      <Option value="india">India</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={7}>
                  <Form.Item
                    name="transport"
                    label="Transport"
                    style={{ fontWeight: 500 }}
                    rules={[{ required: true, message: 'Please select Transport!' }]}
                  >
                    <Select placeholder="Select">
                      <Option value="france">France</Option>
                      <Option value="india">India</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Row justify='space-between'>
                <Col span={7}>
                  <Form.Item
                    name="reference"
                    label="Reference"
                    style={{ fontWeight: 500 }}
                    rules={[{ required: true, message: 'Please select Reference!' }]}
                  >
                    <Select placeholder="Select">
                      <Option value="france">France</Option>
                      <Option value="india">India</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={7}>
                  <Form.Item
                    name="language-spoken"
                    label="Language Spoken"
                    style={{ fontWeight: 500 }}
                    rules={[{ required: true, message: 'Please select Language!' }]}
                  >
                    <Select placeholder="Select">
                      <Option value="france">France</Option>
                      <Option value="india">India</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={7}>
                  <Form.Item
                    name="0ther-members-present"
                    label="Other Members Present"
                    style={{ fontWeight: 500 }}
                    rules={[{ required: true, message: 'Please input your Present Members' }]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <div className={'margin-20'}>
                <Row justify={'space-between'}>
                  <Col span={11}>
                    <Row>
                      <Col span={2}>
                        <SolutionOutlined style={{ fontSize: '30px' }} />
                      </Col>
                      <Col span={22}>
                        <Typography className={'font-title-member '}>
                          NEEDS AND DIFFICULTIES
                        </Typography>
                      </Col>
                    </Row>
                    <div>
                      <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
                        <Col span={8}>
                          <Checkbox value="A">A</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="B">B</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="C">C</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="D">D</Checkbox>
                        </Col>
                      </Checkbox.Group>
                    </div>
                  </Col>
                  <Col span={12}>
                    <Row>
                      <Col span={2}>
                        <SolutionOutlined style={{ fontSize: '30px' }} />
                      </Col>
                      <Col span={22}>
                        <Typography className={'font-title-member '}>
                          SERVICE PRESENTATION
                        </Typography>
                      </Col>
                    </Row>
                    <div>
                      <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
                        <Col span={8}>
                          <Checkbox value="A">A</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="B">B</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="C">C</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="D">D</Checkbox>
                        </Col>
                      </Checkbox.Group>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className={'margin-20'}>
                <Row justify={'space-between'}>
                  <Col span={24} >
                    <Form.Item
                      name={'notes'}
                      label="Internal notes"
                      style={{ fontWeight: 500 }}
                      rules={[{ required: true, message: 'Please input your Internal notes' }]}>
                      <Input.TextArea />
                    </Form.Item>
                  </Col>
                </Row>
              </div>
              <Form.Item wrapperCol={{ offset: 12, span: 24 }}>
                <Button type="primary" htmlType="submit" icon={<UserAddOutlined />}>
                  Create
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default InterventionReportModal;