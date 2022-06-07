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
import { Formik } from "formik";
import * as Yup from "yup";

type SizeType = Parameters<typeof Form>[0]["size"];

const Personality = ({ match, Visible, onSuccess, handleBack, data }: any) => {
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
    favoriteColor: data.personality?.favoriteColor || "",
    personalityTrait: data.personality?.personalityTrait || "",
    sensitiveSubjects: data.personality?.sensitiveSubjects || "",
    favoriteSubject: data.personality?.favoriteSubject || "",
    dislikeSubjects: data.personality?.dislikeSubjects || "",
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
                  <Col span={12} className="mb-16">
                    <label htmlFor="" className="input-label">Favorite Color <span className="information-icon"> <img src={informationIcon} alt="informationIcon" /></span></label>
                    <Form.Item>
                      <Input
                        onChange={handleChange}
                        name="favoriteColor"
                        value={values.favoriteColor}
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={12} className="mb-16">
                    <label htmlFor="" className="input-label">Personality Trait <span className="information-icon"> <img src={informationIcon} alt="informationIcon" /></span></label>
                    <Form.Item>
                      <Input
                        onChange={handleChange}
                        name="personalityTrait"
                        value={values.personalityTrait}
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={12} className="mb-16">
                    <label htmlFor="" className="input-label">Senitive Subjects <span className="information-icon"> <img src={informationIcon} alt="informationIcon" /></span></label>
                    <Form.Item>
                      <Input
                        onChange={handleChange}
                        name="sensitiveSubjects"
                        value={values.sensitiveSubjects}
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={12} className="mb-16">
                    <label htmlFor="" className="input-label">Favorite Subject <span className="information-icon"> <img src={informationIcon} alt="informationIcon" /></span></label>
                    <Form.Item>
                      <Input
                        onChange={handleChange}
                        name="favoriteSubject"
                        value={values.favoriteSubject}
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={12} className="mb-16">
                    <label htmlFor="" className="input-label">Dislike Subjects <span className="information-icon"> <img src={informationIcon} alt="informationIcon" /></span></label>
                    <Form.Item>
                      <Input
                        onChange={handleChange}
                        name="dislikeSubjects"
                        value={values.dislikeSubjects}
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
                        personality: values,
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
export default Personality;
