import React, { useState,useRef } from "react";
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
} from "antd";
import { Layout } from "antd";
import CountryPhoneInput, {
  CountryPhoneInputValue,
  ConfigProvider,
} from "antd-country-phone-input";
import en from "world_countries_lists/data/countries/en/world.json";
import "antd-country-phone-input/dist/index.css";
import plus from "../../../../assets/Images/Plus.svg";
import Editor from "./Editor";
import { Field, Formik } from "formik";
import * as Yup from "yup";
import { Content } from "antd/lib/layout/layout";
import { useDispatch } from "react-redux";
import newsFeedAction from "../../../../Redux/NewsFeed/action";
import { uuidv4 } from "@antv/xflow-core";

type SizeType = Parameters<typeof Form>[0]["size"];
const { Option } = Select;

const PostAdd = ({ organizationData ,editData}: any) => {
  const dispatch = useDispatch();
  const [html, setHtml] = useState("");

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

  const getContent = () => {
    console.log("hi");
  };

  var formSchema = {
    id:editData?.id||uuidv4(),
    organizationName: editData?.organizationName|| "",
    title:  editData?.title|| "",
    describe: "",
  };


  const editorDataChange = (editorData: any) => {
    setHtml(editorData);
  };

  const onFinish = (values: any) => {
    let data = {
      id:values.id,
      date: new Date(),
      organizationName: values.organizationName,
      title: values.title,
      describe: html,
    };
    console.log(data);
    let newsFeedData = [];
    newsFeedData =
      JSON.parse(localStorage.getItem("newsFeedData") || "[]") || [];

    if(editData?.id){
      newsFeedData.forEach((item:any,index:any)=>{
        if(item.id===data.id){
          newsFeedData[index]=data
        }
      })

    }
    else{
      newsFeedData.push(data);
    } 

    message.success("completed");


    dispatch({
      type: newsFeedAction.ADD_NEWSFEED_DATA,
      payload: newsFeedData,
    });
  };


  return (
    <>
      <Formik
        initialValues={formSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object().shape({
          organizationName: Yup.string().required("organizationName Required"),
          title: Yup.string().required("Firstname Required"),
          describe: Yup.string(),
        })}
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
              <Form
                name="nest-messages"
                onFinish={onFinish}
                validateMessages={validateMessages}
                layout={"vertical"}
                autoComplete="off"
              >
                <Row>
                  <Col span={12}>
                    <Form.Item
                      colon={false}
                      name="organizationName"
                      label="Select organization"
                      rules={[{ required: true }]}
                    >
                      <Select
                        className="select"
                        value={values.organizationName}
                        onChange={(value) => {
                          setFieldValue("organizationName", value);
                        }}
                        //onBlur={handleBlur}
                        status={
                          errors.organizationName && touched.organizationName
                            ? "error"
                            : ""
                        }
                      >
                        {organizationData.map((item: any) => {
                          return (
                            <Option
                              name="organizationName"
                              value={item.basic.organizationName}
                            >
                              {item.basic.organizationName}
                            </Option>
                          );
                        })}
                      </Select>
                      {touched.organizationName && errors.organizationName ? (
                        <h5 style={{ color: "red" }}>Required</h5>
                      ) : null}
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <Form.Item colon={false} rules={[{ required: true }]}>
                      <Input
                        placeholder="News Tittle"
                        onChange={handleChange}
                        required
                        name="title"
                        value={values.title}
                        onBlur={handleBlur}
                        status={errors.title && touched.title ? "error" : ""}
                      />

                      {touched.title && errors.title ? (
                        <h5 style={{ color: "red" }}>Required</h5>
                      ) : null}
                    </Form.Item>
                  </Col>
                </Row>
                <div className="stepper-buttons news-submit-button">
                  <Button
                    type="primary"
                    className="stepper-button"
                    size={"large"}
                    onClick={() => {
                      onFinish(values);
                    }}
                  >
                    Post
                  </Button>
                </div>
              </Form>
            </Layout>
          );
        }}
      </Formik>
      <Row>
        <Form.Item label="Describe the information to be posted">
          <Editor editorDataChange={editorDataChange} editData={editData} />
        </Form.Item>
      </Row>
    </>
  );
};
export default PostAdd;
