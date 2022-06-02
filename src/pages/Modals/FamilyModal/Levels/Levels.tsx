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
  Slider,
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

type SizeType = Parameters<typeof Form>[0]["size"];

const Levels = ({ match, Visible, onSuccess, handleBack, data,onSubmit }: any) => {
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
    socialLevel: null,
    physicalLevel: null,
    cognitiveLevel: null,
    emotionalLevel: null,
    spiritualLevel: null,
  };

  return (
    <Formik
      initialValues={formSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
      }}
      validationSchema={Yup.object().shape({})}
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
                <Row>
                  <Col span={12}>
                    <label>Social level</label>
                    <Form.Item>
                      <Slider
                        defaultValue={30}
                        onChange={(v) => {
                          setFieldValue("socialLevel", v);
                        }}
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={12}>
                    <label>Physical level</label>
                    <Form.Item>
                      <Slider
                        defaultValue={30}
                        onChange={(v) => {
                          setFieldValue("physicalLevel", v);
                        }}
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={12}>
                    <label>Cognitive level</label>
                    <Form.Item>
                      <Slider
                        defaultValue={30}
                        onChange={(v) => {
                          setFieldValue("cognitiveLevel", v);
                        }}
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={12}>
                    <label>Emotional management level</label>
                    <Form.Item>
                      <Slider
                        defaultValue={30}
                        onChange={(v) => {
                          setFieldValue("emotionalLevel", v);
                        }}
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={12}>
                    <label>Spiritual level</label>
                    <Form.Item>
                      <Slider
                        defaultValue={30}
                        onChange={(v) => {
                          setFieldValue("spiritualLevel", v);
                        }}
                      />
                    </Form.Item>
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
                      onSubmit({
                        ...data,
                        levels: values,
                      })
                    }
                  >
                    create
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
export default Levels;
