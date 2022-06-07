import React, { useState } from "react";
import informationIcon from "../../../../assets/Images/information_icons.svg";
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
import sad from "../../../../assets/Images/sad.svg";
import happy from "../../../../assets/Images/happy.svg";
import smile from "../../../../assets/Images/smile.svg";
import { Formik } from "formik";
import * as Yup from "yup";

type SizeType = Parameters<typeof Form>[0]["size"];

const Abilities = ({ match, Visible, onSuccess, data, handleBack }: any) => {
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
  const marks = {
    0: "Bad",
    25: "Average",
    50: "Good",
    75: "Very Good",
    100: "Excellent",
  };
  const mood = {
    0: <img src={sad}></img>,
    50: <img src={happy}></img>,
    100: <img src={smile}></img>,
  };

  var formSchema = {
    strengths: data.abilities?.strengths || "",
    improvement: data.abilities?.improvement || "",
    comfort: data.abilities?.comfort || "",
    readingLevel: data.abilities?.readingLevel || null,
    mood: data.abilities?.mood || null,
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
                <div className="albilities-block">
                  <Row>
                    <Col span={24} className="mb-16">
                      <label htmlFor="" className="input-label">Lists of strengths<span className="information-icon"> <img src={informationIcon} alt="informationIcon" /></span></label>
                      <Form.Item>
                        <Input name="strengths" onChange={handleChange} value={values.strengths} />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={24} className="mb-16">
                      <label htmlFor="" className="input-label">Lists of areas of improvement<span className="information-icon"> <img src={informationIcon} alt="informationIcon" /></span></label>
                      <Form.Item>
                        <Input name="improvement" onChange={handleChange} value={values.improvement} />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={24} className="mb-16">
                      <label htmlFor="" className="input-label">How to comfort if hurt, scared, worried<span className="information-icon"> <img src={informationIcon} alt="informationIcon" /></span></label>
                      <Form.Item>
                        <Input name="comfort" onChange={handleChange} value={values.comfort} />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={10} className="mb-16">
                      <label htmlFor="" className="input-label">Reading Level<span className="information-icon"> <img src={informationIcon} alt="informationIcon" /></span></label>
                    </Col>
                    <Col span={14} className="mb-16">
                      <Form.Item>
                        <Slider
                          className="ability"
                          marks={marks}
                          value={values.readingLevel}
                          included={false}
                          onChange={(v) => {
                            setFieldValue("readingLevel", v);
                          }}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={10} className="mb-16">
                      <label htmlFor="" className="input-label">Child's mood on an average day<span className="information-icon"> <img src={informationIcon} alt="informationIcon" /></span></label>
                    </Col>
                    <Col span={14} className="mb-16">
                      <Form.Item>
                        <Slider
                          className="ability"
                          marks={mood}
                          value={values.mood}
                          included={false}
                          onChange={(v) => {
                            setFieldValue("mood", v);
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
                        onSuccess({
                          ...data,
                          abilities: values,
                        })
                      }
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
export default Abilities;
