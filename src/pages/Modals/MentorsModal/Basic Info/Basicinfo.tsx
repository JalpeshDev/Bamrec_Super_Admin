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
import { Formik } from "formik";
import * as Yup from "yup";
import { uuidv4 } from "@antv/xflow-core";
import { date } from "yup/lib/locale";
import moment from "moment";

type SizeType = Parameters<typeof Form>[0]["size"];

const Basicinfo = ({ match, Visible, data, handleBack, onSuccess }: any) => {
  const [value, setValue] = useState<CountryPhoneInputValue>({ short: "US" });

  const onFinish = (values: any) => {
    console.log(values);
  };

  console.log("personalDetails", data);

  var formSchema = {
    firstname: data.personalDetails?.firstname || "",
    lastname: data.personalDetails?.lastname || "",
    gender: data.personalDetails?.gender || "",
    email: data.personalDetails?.email || "",
    phone: data.personalDetails?.phone || value,
    dob: moment(data.personalDetails?.dob) || null,
  };

  return (
    <Formik
      initialValues={formSchema}
      onSubmit={(values, { setSubmitting }) => {
        formSchema.phone = value;
        onSuccess = { onSuccess };
      }}
      validationSchema={Yup.object().shape({
        gender: Yup.string().required("Firstname Required"),
        firstname: Yup.string().required("Firstname Required"),
        lastname: Yup.string().required("Lasttname Required"),
        email: Yup.string().email("Invalid Email").required("Email Required"),
        dob: Yup.date().required("Address Required"),
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
              <Form name="nest-messages" onFinish={onFinish} layout="vertical">
                <Row gutter={24}>
                  <Col span={12} className="mb-16">
                    <Form.Item colon={false}>
                      <label htmlFor="" className="input-label">First Name</label>
                      <Input
                        placeholder="FirstName"
                        onChange={handleChange}
                        required
                        name="firstname"
                        value={values.firstname}
                        onBlur={handleBlur}
                        status={
                          errors.firstname && touched.firstname ? "error" : ""
                        }
                      />

                      {touched.firstname && errors.firstname ? (
                        <h5 style={{ color: "red" }}>Required</h5>
                      ) : null}
                    </Form.Item>
                  </Col>
                  <Col span={12} className="mb-16">
                    <Form.Item colon={false}>
                      <label htmlFor="" className="input-label">Last Name</label>
                      <Input
                        placeholder="Last Name"
                        value={values.lastname}
                        name="lastname"
                        onChange={handleChange}
                        status={
                          errors.lastname && touched.lastname ? "error" : ""
                        }
                      />
                      {touched.lastname && errors.lastname ? (
                        <h5 style={{ color: "red" }}>Required</h5>
                      ) : null}
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={24} className="mb-16">
                    <Form.Item >
                      <label htmlFor="" className="input-label">Gender</label>
                      <Radio.Group
                        onChange={handleChange}
                        name="gender"
                        value={values.gender}
                      >
                        <Radio.Button className="radioButton" value="female">
                          Female
                        </Radio.Button>
                        <Radio.Button className="radioButton" value="male">
                          Male
                        </Radio.Button>
                      </Radio.Group>
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={12} className="mb-16">
                    <Form.Item
                      name="email"
                      rules={[{ required: true }]}
                    >
                      <label htmlFor="" className="input-label required-input">Email</label>
                      <Input
                        placeholder="example@gmail.com"
                        onChange={handleChange}
                        name="email"
                        value={values.email}
                        status={errors.email && touched.email ? "error" : ""}
                      />
                      {touched.email && errors.email ? (
                        <h5 style={{ color: "red" }}>Required</h5>
                      ) : null}
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={12} className="mb-16">
                    <Form.Item>
                      <label htmlFor="" className="input-label">Contact number</label>
                      <CountryPhoneInput
                        value={values.phone}
                        onChange={(v) => {
                          setFieldValue("phone", v);
                        }}
                        className="your-custom-class"
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Row >
                  <Col span={12} className="mb-16">
                    <Form.Item>
                      <label htmlFor="" className="input-label required-input"> Date of Birth</label>

                      <DatePicker
                        onBlur={handleBlur}
                        value={values.dob}
                        name="dob"
                        className="date-picker"
                        onChange={(date) => {
                          setFieldValue("dob", date);
                        }}
                      />
                      {touched.dob && errors.dob ? (
                        <h5 style={{ color: "red" }}>Required</h5>
                      ) : null}
                    </Form.Item>
                  </Col>
                </Row>

                <div className="footer-modal">
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
