import React, { useState, useRef } from "react";
import {
  Form,
  Button,
  Select,
  Dropdown,
  Space,
  Menu,
  Col,
  Radio,
  Switch,
  Input,
} from "antd";
import { Layout, Row } from "antd";
import "antd-country-phone-input/dist/index.css";
import { Field, Formik, useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { DownOutlined } from "@ant-design/icons";
import TextArea from "antd/lib/input/TextArea";
import MapComponent from "./Map/MapComponent";
import { uuidv4 } from "@antv/xflow-core";
import { useEffect } from "preact/hooks";

const GeneralDetails = ({ onSuccess, prev, data }: any) => {
  const dispatch = useDispatch();
  const { Option } = Select;
  const [radioValue, setRadioValue] = useState(1);
  const [mapModalVisible, setMapModalVisible] = useState(false);
  const [mapData, setMapData] = useState({
    area: "",
    state: "",
  });

  const handleRadioValueChange = (e: any) => {
    setRadioValue(e.target.value);
  };

  const formSchema = {
    createdAt: new Date(),
    id: data?.generalDetails?.id || uuidv4(),
    children: data?.generalDetails?.children || "",
    gender: data?.generalDetails?.gender || "",
    location: mapData?.area || data?.generalDetails?.location,
    mentorName: data?.generalDetails?.mentorName || "",
  };
  console.log(formSchema);

  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={formSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object().shape({})}
      >
        {(props) => {
          const {
            values,
            touched,
            errors,
            handleChange,
            handleBlur,
            setFieldValue,
          } = props;

          return (
            <Layout>
              <Form layout="vertical">
                <h2>
                  <b>General Details</b>
                </h2>
                <Form.Item label="children">
                  <Select
                    value={values.children}
                    onChange={(v) => {
                      setFieldValue("children", v);
                    }}
                  >
                    <Option value={"child1"}>child1</Option>
                    <Option value="child2">child2</Option>
                  </Select>
                </Form.Item>
                <Form.Item label="Gender Preferences">
                  <Select
                    value={values.gender}
                    onChange={(v) => {
                      setFieldValue("gender", v);
                    }}
                  >
                    <Option value="male">Male</Option>
                    <Option value="femail">Female</Option>
                  </Select>
                </Form.Item>
                <Row>
                  <Radio.Group
                    value={radioValue}
                    onChange={handleRadioValueChange}
                  >
                    <Radio className="radio" value={1}>
                      In person
                    </Radio>
                    <Radio className="radio" value={2}>
                      Online
                    </Radio>
                  </Radio.Group>
                </Row>
                {radioValue == 1 && (
                  <Form.Item label="Location">
                    <Input
                      onClick={() => {
                        setMapModalVisible(true);
                      }}
                      value={values.location}
                    ></Input>
                    {mapModalVisible && (
                      <MapComponent
                        setMapModalVisible={setMapModalVisible}
                        setMapData={setMapData}
                      />
                    )}
                  </Form.Item>
                )}
                <Form.Item>
                  <Row justify="space-between">
                    <h4> Willing to alternate mentors?</h4>
                    <Switch className="switch"></Switch>
                  </Row>
                </Form.Item>
                <Form.Item>
                  <Row justify="space-between">
                    <h4> Do you have any preferred Mentors??</h4>
                    <Switch defaultChecked className="switch"></Switch>
                  </Row>
                  <Form.Item>
                    <Input
                      placeholder="Mentor name"
                      name="mentorName"
                      onChange={handleChange}
                      value={values.mentorName}
                    ></Input>
                  </Form.Item>
                </Form.Item>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h5 className="stepperBackh5" onClick={prev}>
                    Back
                  </h5>
                  <Button
                    type="primary"
                    className="stepper-button"
                    size="large"
                    onClick={() => {
                      onSuccess({ ...data, generalDetails: values });
                    }}
                  >
                    Next
                  </Button>
                </div>
              </Form>
            </Layout>
          );
        }}
      </Formik>
    </>
  );
};
export default GeneralDetails;
