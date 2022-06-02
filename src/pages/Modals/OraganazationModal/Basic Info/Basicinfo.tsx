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
  message,
  Avatar,
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
import ReactCrop from "react-image-crop";
import ImageCrop from "./ImageCrop";
import MapComponent from "./MapComponent";

type SizeType = Parameters<typeof Form>[0]["size"];

const Basicinfo = ({ match, Visible, data, onSuccess }: any) => {
  const [value, setValue] = useState<CountryPhoneInputValue>({ short: "US" });
  const [croppedOrganizationPhoto, setCroppedOrganizationPhoto] =
    useState<any>("");
  const [mapModalVisible, setMapModalVisible] = useState(false);
  const [mapModalData, setMapModalData] = useState({
    street: "",
    state: "",
  });


  console.log(mapModalData);

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
    organizationName: data.organizationName || data.basic?.organizationName,
    organizationProfile:
      data.basic?.organizationProfile || croppedOrganizationPhoto,
    firstname: data.firstname || data.basic?.firstname,
    lastname: data.lastname || data.basic?.lastname,
    email: data.email || data.basic?.email,
    address: data.address || data.basic?.address,
    phone: data.basic?.phone || value,
  };

  return (
    <Formik
      initialValues={formSchema}
      onSubmit={(values, { setSubmitting }) => {
        formSchema.phone = value;
        onSuccess = { onSuccess };
      }}
      validationSchema={Yup.object().shape({
        organizationName: Yup.string().required("Firstname Required"),
        firstname: Yup.string().required("Firstname Required"),
        lastname: Yup.string().required("Lasttname Required"),
        email: Yup.string().email("Invalid Email").required("Email Required"),
        // address: Yup.string().required("Address Required"),
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
                      name="name"
                      rules={[{ required: true }]}
                    >
                      <label htmlFor="" className="input-label required-input">Name</label>
                      <Input
                        placeholder={
                          data.length > 0
                            ? data.organizationName
                            : "Organazations Name"
                        }
                        value={values.organizationName}
                        onChange={handleChange}
                        name="organizationName"
                        onBlur={handleBlur}
                        status={
                          errors.organizationName && touched.organizationName
                            ? "error"
                            : ""
                        }
                      />
                      {touched.organizationName && errors.organizationName ? (
                        <h5 style={{ color: "red" }}>Required</h5>
                      ) : null}
                    </Form.Item>
                  </Col>
                  <Col span={12} className="mb-16">
                    <Form.Item className="upload-file">
                      <label htmlFor="" className="input-label">Profile Photo</label>
                      <ImageCrop
                        setCroppedOrganizationPhoto={
                          setCroppedOrganizationPhoto
                        }
                      />
                    </Form.Item>
                  </Col>
                </Row>

                <Row gutter={24}>
                  <Col span={12} className="mb-16">
                    <Form.Item
                      colon={false}
                      rules={[{ required: true, message: "Required" }]}
                    >
                      <label htmlFor="" className="input-label">Admin FirstName</label>
                      <Input
                        placeholder="Admin FirstName"
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
                      <label htmlFor="" className="input-label">Admin Last Name</label>
                      <Input
                        placeholder="Admin Last Name"
                        onChange={handleChange}
                        name="lastname"
                        value={values.lastname}
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
                  <Col span={12} className="mb-16">
                    <Form.Item name="email">
                      <label htmlFor="" className="input-label required-input">Organization Email</label>
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
                      <label htmlFor="" className="input-label">Phone number</label>
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
                  <Col span={12} className="mb-16">
                    <Form.Item
                      name="location"
                      rules={[{ required: true }]}
                    >
                      <label htmlFor="" className="input-label required-input">Location</label>
                      <Input
                        placeholder="Location"
                        name="address"
                        onClick={() => {
                          setMapModalVisible(true);
                        }}
                        value={`${mapModalData?.street} ${mapModalData?.state} ${mapModalData?.state}`}
                      />
                      {mapModalVisible && (
                        <MapComponent
                          setMapModalVisible={setMapModalVisible}
                          setMapModalData={setMapModalData}
                        />
                      )}
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
                          formSchema.phone = value;
                          values.organizationProfile = croppedOrganizationPhoto;
                          onSuccess({
                            ...data,
                            id: data?.id || uuidv4(),
                            status: data?.status || "active",
                            basic: values,
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
