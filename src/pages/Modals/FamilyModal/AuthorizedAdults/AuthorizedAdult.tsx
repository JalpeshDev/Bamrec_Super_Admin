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

type SizeType = Parameters<typeof Form>[0]["size"];

const AuthorizedAdult = ({
  match,
  Visible,
  onSuccess,
  handleBack,
  data,
}: any) => {
  const [value, setValue] = useState<CountryPhoneInputValue>({ short: "US" });

  const onFinish = (values: any) => {
    console.log(values);
  };
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };

  var formSchema = {
    firstname: data.authAdults?.firstname || "",
    lastname: data.authAdults?.lastname || "",
    role: data.authAdults?.role || "",
    email: data.authAdults?.email || "",
    phone: data.authAdults?.phone || value,
  };

  return (
    <Formik
      initialValues={formSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
      }}
      validationSchema={Yup.object().shape({
        role: Yup.string().required(),
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
                validateMessages={validateMessages}
                layout={"vertical"}
                autoComplete="off"
              >
                <Row gutter={24}>
                  <Col span={12} className="mb-16">
                    <Form.Item
                      colon={false}
                      rules={[{ required: true }]}                   
                    >
                       <label htmlFor="" className="input-label">First Name</label>
                      <Input
                        placeholder="FirstName"
                        name="firstname"
                        value={values.firstname}
                        onChange={handleChange}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={12} className="mb-16">
                    <Form.Item colon={false}>
                    <label htmlFor="" className="input-label">Last Name</label>
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
                  <Col span={12} className="mb-16">
                    <Form.Item
                      name="role"                   
                      rules={[{ required: true }, { type: "string", min: 6 }]}
                    >
                       <label htmlFor="" className="input-label required-input">Role</label>
                      <Input
                        placeholder="Ex:Father"
                        onChange={handleChange}
                        name="role"
                        value={values.role}
                      />
                      {touched.role && errors.role ? (
                        <h5 style={{ color: "red" }}>Required</h5>
                      ) : null}
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={12} className="mb-16">
                    <Form.Item>
                    <label htmlFor="" className="input-label required-input">Email</label>
                      <Input
                        placeholder="example@gmail.com"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={12} className="mb-16">
                    <Form.Item
                      rules={[{ required: true }]}
                    >
                    <label htmlFor="" className="input-label required-input">Contact number</label>
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
                <Row>
                <Col className="mb-16 d-flex align-items-center">
                    <Row>
                      <div className="d-flex add-family">
                        <img src={plusBlue}></img>
                        <p className="text-green" style={{fontSize:'15px'}}>Add more authorized adult</p> 
                      </div>
                    </Row>
                  </Col>
                </Row>
                <div className="stepper-buttons">
                  <h5
                    className="stepperBackh5"
                    onClick={() => handleBack(data)}
                  >
                    Back
                  </h5>
                  <Button
                    type="primary"
                    className="stepper-button"
                    onClick={() =>
                      onSuccess({
                        ...data,
                        authAdults: values,
                      })
                    }
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
export default AuthorizedAdult;
