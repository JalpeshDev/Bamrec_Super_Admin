import React, { useState, useRef } from "react";
import {
  Form,
  Button,
  Select,
  Dropdown,
  Space,
  Menu,
  Row,
  Col,
  Checkbox,
  Input,
  message,
} from "antd";
import { Layout } from "antd";
import "antd-country-phone-input/dist/index.css";
import { Field, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { DownOutlined } from "@ant-design/icons";
import TextArea from "antd/lib/input/TextArea";

const FeedBack = ({ setFeedBackModalVisible }: any) => {
  const dispatch = useDispatch();

  const [source, setSource] = useState<any[]>([
    {
      key: 0,
      title: "Instagram",
      checked: false,
    },
    {
      key: 1,
      title: "Facebook",
      checked: false,
    },
    {
      key: 2,
      title: "Linkedin",
      checked: false,
    },
    {
      key: 3,
      title: "Flyer",
      checked: false,
    },
    {
      key: 4,
      title: "Email",
      checked: false,
    },
    {
      key: 5,
      title: "Friend",
      checked: false,
    },
    {
      key: 6,
      title: "Other",
      checked: false,
    },
  ]);

  console.log(source);

  return (
    <>
      <Layout>
        <Form layout="vertical">
          <h2>
            <b>How did you hear about the BAM program? </b>
          </h2>
          {source.map((sourceItem: any, index: any) => {
            return (
              <div key={index}>
                <Row justify="space-between" style={{ padding: "5px" }}>
                  <Col>{sourceItem.title}</Col>
                  <Col>
                    <Checkbox
                      onChange={(e) => {
                        let newSource = [...source];
                        newSource[index] = {
                          ...sourceItem,
                          checked: e.target.checked,
                        };
                        setSource(newSource);
                      }}
                      checked={sourceItem.checked}
                    ></Checkbox>
                  </Col>
                </Row>
                {sourceItem.title === "Friend" && sourceItem.checked == true && (
                  <div className="display-column">
                    <label>
                      <b>Friends Name</b>
                    </label>
                    <Input></Input>
                  </div>
                )}
                {sourceItem.title === "Other" && sourceItem.checked == true && (
                  <div className="display-column">
                    <label>
                      <b>Other</b>
                    </label>
                    <Input></Input>
                  </div>
                )}
              </div>
            );
          })}
          <Row justify="end">
            <Button
              type="primary"
              className="stepper-button"
              onClick={() => {
                message.success("Thanks for Feedback");
                setFeedBackModalVisible(false);
              }}
            >
              Submit
            </Button>
          </Row>
        </Form>
      </Layout>
    </>
  );
};
export default FeedBack;
