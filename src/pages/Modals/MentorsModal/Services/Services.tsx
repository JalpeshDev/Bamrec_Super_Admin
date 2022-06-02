import React, { useState } from "react";
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
} from "antd";
import { Layout } from "antd";
import plus from "../../../../assets/Images/Plus.svg";
type SizeType = Parameters<typeof Form>[0]["size"];

const Services = ({ match, Visible, handleBack, onSubmit, data }: any) => {
  const [serviceData, setServiceData] = useState({
    services: data.serviceData?.services || "",
    description: data.serviceData?.description || "",
  });

  console.log(serviceData);

  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <Layout>
      <Form name="nest-messages" onFinish={onFinish} layout="vertical">
        <Row>
          <Col span={12}>
            <Form.Item rules={[{ required: true }]} label="Services">
              <Input
                placeholder="Ex:Tutor, Sport Coach"
                name="services"
                value={serviceData.services}
                onChange={(e) => {
                  setServiceData({ ...serviceData, services: e.target.value });
                }}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item rules={[{ required: true }]} label="Description">
              <Input.TextArea
                rows={4}
                name="description"
                value={serviceData.description}
                placeholder="Add a short description of your specific service here..."
                onChange={(e) => {
                  setServiceData({
                    ...serviceData,
                    description: e.target.value,
                  });
                }}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Item className="add-service-text">
              <img src={plus}></img>Add more specific services
            </Form.Item>
          </Col>
        </Row>
        <div className="footer-modal">
          <div className="stepper-buttons">
            <h5 className="stepperBackh5" onClick={() => handleBack(data)}>
              Back
            </h5>
            <Button
              type="primary"
              className="stepper-button"
              onClick={() => {
                onSubmit({ ...data, serviceData: serviceData });
              }}
            >
              Create
            </Button>
          </div>
        </div>
      </Form>
    </Layout>
  );
};
export default Services;
