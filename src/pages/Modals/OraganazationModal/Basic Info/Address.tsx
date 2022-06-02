import { Button, Form, Input, Radio, Row, Space } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { useState } from "react";
import marker from "../../../../assets/Images/placeholder.png";
import { HomeOutlined } from "@ant-design/icons";

const Address = ({ prev, mapData, onSubmit }: any) => {
  const [address, setAddress] = useState({
    street: mapData.choosenLocation.area,
    city: mapData.choosenLocation.city,
    state: mapData.choosenLocation.state,
  });

  return (
    <>
      <Row>
        <h3>
          <b>
            <img src={marker}></img> {mapData.choosenLocation.area}
          </b>
        </h3>
      </Row>
      <Row>
        <h5>
          {mapData.choosenLocation.area}, {mapData.choosenLocation.city},{" "}
          {mapData.choosenLocation.state}
        </h5>
      </Row>
      <Form layout="vertical">
        <Form.Item label="House/Flat/Block No">
          <Input></Input>
        </Form.Item>
        <Form.Item label="Apartment/Road/Area">
          <Input></Input>
        </Form.Item>
        <Form.Item label="Direction to Reach">
          <TextArea></TextArea>
        </Form.Item>
        <Form.Item label="Save this address as">
          <Radio.Group
            defaultValue="home"
            style={{ width: "100%" }}
            onChange={(value) => {
              console.log(value);
            }}
          >
            <Row>
              <Radio.Button className="radioButton" value="home" defaultChecked>
                <HomeOutlined /> Home
              </Radio.Button>
              <Radio.Button className="radioButton" value="work">
                Work
              </Radio.Button>
              <Radio.Button className="radioButton" value="other">
                Other
              </Radio.Button>
            </Row>
          </Radio.Group>
        </Form.Item>
        <Row justify="space-between">
          <h5
            className="stepperBackh5"
            onClick={() => {
              prev();
            }}
          >
            Back
          </h5>
          <Button
            type="primary"
            className="stepper-button"
            onClick={() => {
              onSubmit(address);
            }}
          >
            save
          </Button>
        </Row>
      </Form>
    </>
  );
};

export default Address;
