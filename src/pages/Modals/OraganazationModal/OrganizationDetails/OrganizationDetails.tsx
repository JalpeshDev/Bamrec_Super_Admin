import React, { useState } from "react";
import { Form, Button, Row, Input, Col, DatePicker } from "antd";
import { Layout } from "antd";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import facebookIcon from "../../../../assets/Images/Facebook.svg";
import twitter from "../../../../assets/Images/twitter.svg";
import { Formik } from "formik";
import * as Yup from "yup";
import moment from "moment";
import { date } from "yup/lib/locale";

type SizeType = Parameters<typeof Form>[0]["size"];

const OrganizationDetails = ({
  match,
  Visible,
  onSubmit,
  data,
  handleBack,
}: any) => {
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

  console.log(data, "detailsssssssssssssss")

  var formSchema = {
    about: data.details?.about || "",
    EstablishedDate: moment(data.details?.EstablishedDate) || null,
    website: data.details?.website || "",
    facebook: data.details?.facebook || "",
    twitter: data.details?.twitter || "",
  };

  return (
    <Formik
      initialValues={formSchema}
      onSubmit={(values, { setSubmitting }) => { }}
      validationSchema={Yup.object().shape({
        about: Yup.string().required("About Required"),
        EstablishedDate: Yup.string().required("EstablishedDate Required"),
        website: Yup.string().required("url Required"),
        facebook: Yup.string().required("facebook Required"),
        twitter: Yup.string().required("twitter Required"),
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
            <Form
              name="nest-messages"
              onFinish={onFinish}
              layout="vertical"
              validateMessages={validateMessages}
            >
              <Row>
                <Col span={24} className="mb-16">
                  <Form.Item>
                    <label htmlFor="" className="input-label">About</label>
                    <Input.TextArea
                      rows={4}
                      name="about"
                      onChange={handleChange}
                      value={values.about}
                      placeholder="Background, services, etc"
                      onBlur={handleBlur}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col span={12} className="mb-16">
                  <Form.Item>
                    <label htmlFor="" className="input-label required-input">Established on</label>
                    <DatePicker
                      onBlur={handleBlur}
                      className="date-picker"
                      value={values.EstablishedDate}
                      onChange={(date) => {
                        setFieldValue("EstablishedDate", date);
                      }}
                    />
                    {touched.website && errors.website ? (
                      <h5 style={{ color: "red" }}>Required</h5>
                    ) : null}
                  </Form.Item>

                </Col>
              </Row>
              <Row>
                <Col span={12} className="mb-16">
                  <Form.Item>
                    <label htmlFor="" className="input-label required-input">Website</label>
                    <Input
                      placeholder="example@gmail.com"
                      name="website"
                      value={values.website}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      status={errors.website && touched.website ? "error" : ""}
                    />
                    {touched.website && errors.website ? (
                      <h5 style={{ color: "red" }}>Required</h5>
                    ) : null}
                  </Form.Item>
                </Col>
              </Row>
              <label className="input-label">Socials</label>
              <Row className="align-items-center mb-16">
                <Col span={2}>
                  <div>
                    <img src={facebookIcon}></img>
                  </div>
                </Col>
                <Col span={12}>
                  <Form.Item>
                    <Input
                      placeholder="Facebook profile URL"
                      name="facebook"
                      value={values.facebook}
                      onChange={handleChange}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row className="align-items-center mb-16">
                <Col span={2}>
                  <div>
                    <img src={twitter}></img>
                  </div>
                </Col>
                <Col span={12}>
                  <Form.Item>
                    <Input
                      placeholder="Twitter profile URL"
                      name="twitter"
                      value={values.twitter}
                      onChange={handleChange}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <div className="stepper-buttons">
                <h5 className="stepperBackh5" onClick={() => handleBack(data)}>
                  Back
                </h5>
                <Button
                  type="primary"
                  className="stepper-button"
                  onClick={() => onSubmit({ ...data, details: values })}
                >
                  Create
                </Button>
              </div>
            </Form>
          </Layout>
        );
      }}
    </Formik>
  );
};
export default OrganizationDetails;
