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
import CountryPhoneInput, {
  CountryPhoneInputValue,
  ConfigProvider,
} from "antd-country-phone-input";
import en from "world_countries_lists/data/countries/en/world.json";
import "antd-country-phone-input/dist/index.css";
import plusBlue from "../../../../assets/Images/plusBlue.svg";
import { Formik } from "formik";
import * as Yup from "yup";
import moment from "moment";
import { uuidv4 } from "@antv/xflow-core";
type SizeType = Parameters<typeof Form>[0]["size"];
const { Option } = Select;

const Basicinfo = ({ match, Visible, onSuccess, data }: any) => {
  const [value, setValue] = useState<CountryPhoneInputValue>({ short: "US" });

  const onFinish = (values: any) => {
    console.log(values);
  };
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  console.log(data);
  var formSchema = {
    parent: data.personalDetails?.parent || "",
    firstname: data.personalDetails?.firstname || "",
    lastname: data.personalDetails?.lastname || "",
    school: data.personalDetails?.school || "",
    grade: data.personalDetails?.grade || "",
    dob: moment(data.personalDetails?.dob) || null,
    gender: data.personalDetails?.gender || "",
  };

  return (
    <Formik
      initialValues={formSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
      }}
      validationSchema={Yup.object().shape({
        // parent: Yup.string().required(),
        firstname: Yup.string().required("Firstname Required"),
        lastname: Yup.string().required("Lasttname Required"),
        school: Yup.string().required(),
        grade: Yup.string().required(),
        gender: Yup.string().required(),
        // dob: Yup.date().required("date Required"),
      })}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          validateForm,
          setTouched,
        } = props;
        return (
          <Layout>
            <ConfigProvider locale={en}>
              <Form
                name="nest-messages"
                onFinish={onFinish}
                layout={"vertical"}
                autoComplete="off"
              >
                <Row gutter={24} align="bottom">
                  <Col span={12}>
                    <Form.Item rules={[{ required: true }]} label="Select parent">
                      <Select
                        className="select"
                        placeholder="Select"
                        onChange={(v) => {
                          setFieldValue("parent", v);
                        }}
                        value={values.parent}
                      >
                        <Option name="parent" value="item1">
                          item1
                        </Option>
                        <Option name="parent" value="item2">
                          item2
                        </Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item className="add-service-text">
                      <Row justify="space-around">
                        <img src={plusBlue}></img>Create new family
                      </Row>
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={24}>
                  <Col span={12}>
                    <Form.Item
                      colon={false}
                      label="First Name"
                      rules={[{ required: true }]}
                    >
                      <Input
                        placeholder="FirstName"
                        name="firstname"
                        value={values.firstname}
                        onChange={handleChange}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item colon={false} label="Last name">
                      <Input
                        placeholder="Last Name"
                        name="lastname"
                        value={values.lastname}
                        onChange={handleChange}
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <Form.Item label="Gender">
                      <Radio.Group
                        onChange={handleChange}
                        name="gender"
                        value={values.gender}
                        style={{ width: "100%" }}
                      >
                        <Radio.Button className="radioButton" value="male">
                          Male
                        </Radio.Button>
                        <Radio.Button className="radioButton" value="female">
                          Female
                        </Radio.Button>
                      </Radio.Group>
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={12}>
                    <Form.Item label="Date of Birth">
                      <DatePicker
                        className="date-picker"
                        name="dob"
                        value={values.dob}
                        onChange={(date) => {
                          setFieldValue("dob", date);
                        }}
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={24}>
                  <Col span={12}>
                    <Form.Item colon={false} rules={[{ required: true }]} label="School">
                      <Input
                        name="school"
                        value={values.school}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.school && errors.school ? (
                        <h5 style={{ color: "red" }}>Required</h5>
                      ) : null}
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item colon={false} label="Grade">
                      <Input
                        name="grade"
                        value={values.grade}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.grade && errors.grade ? (
                        <h5 style={{ color: "red" }}>Required</h5>
                      ) : null}
                    </Form.Item>
                  </Col>
                </Row>
                <div className="stepperNextButton">
                  <Button
                    type="primary"
                    className="stepper-button"
                    onClick={() => {
                      validateForm().then((errors: any) => {
                        if (Object.entries(errors).length === 0) {
                          onSuccess({
                            ...data,
                            id: data?.id || uuidv4(),
                            status: data?.status || "active",
                            personalDetails: values,
                          });
                        } else {
                          setTouched(errors);
                        }
                      });
                    }}
                  >
                    Next
                  </Button>
                </div>
              </Form>
            </ConfigProvider>
          </Layout>
        );
      }}
    </Formik>
  );
};
export default Basicinfo;
