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
  TimePicker,
  Upload,
  Space,
  message
} from "antd";
import { Layout } from "antd";
import CountryPhoneInput, {
  CountryPhoneInputValue,
  ConfigProvider,
} from "antd-country-phone-input";
import en from "world_countries_lists/data/countries/en/world.json";
import "antd-country-phone-input/dist/index.css";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import checkbox from "../../../../assets/Images/checkbox.png";
import eventsAction from "../../../../Redux/Events/action";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";

type SizeType = Parameters<typeof Form>[0]["size"];
const { Option } = Select;

const CreateEvent = ({ match, Visible, onSubmit, currentMentorData }: any) => {
  const [value, setValue] = useState<CountryPhoneInputValue>({ short: "US" });
  const [imageUrl, setImageUrl] = useState();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const onFinish = (values: any) => {
    console.log("value is.......", values);
    let data = {
      id: values.id,
      date: new Date(),
      time: values.time,
      agerange: values.agerange,
      price: values.price,
      description: values.description
    };
    console.log("Data is here",data);
    
    //     console.log(data);
    //     let newsFeedData = [];
    //     newsFeedData =
    //       JSON.parse(localStorage.getItem("newsFeedData") || "[]") || [];

    //     if(editData?.id){
    //       newsFeedData.forEach((item:any,index:any)=>{
    //         if(item.id===data.id){
    //           newsFeedData[index]=data
    //         }
    //       })

    //     }
    // else{
    //   newsFeedData.push(data);
    // } 

    message.success("completed");


    dispatch({
      type: eventsAction.ADD_EVENTS_DATA,
      // payload: eventsData,
    });
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
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  var formSchema = {
    organizationName: "",
    image: "",
    date: "",
    time: "",
    agerange: "",
    price: "",
    description: "",
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
              >
                <Row>
                  <Col span={12}>
                    <Form.Item colon={false} label="Select organization">
                      <Select className="select" onChange={handleChange}>
                        <Option name="organizationName" value="item1">
                          item1
                        </Option>
                        <Option name="organizationName" value="item2">
                          item2
                        </Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Upload
                      name="avatar"
                      listType="picture-card"
                      className="avatar-uploader"
                      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    >
                      {imageUrl ? (
                        <img src={imageUrl} alt="avatar" />
                      ) : (
                        uploadButton
                      )}
                    </Upload>
                  </Col>
                </Row>
                <Row>
                  <Col span={12}>
                    <Space size="small">
                      <DatePicker
                        className="date-picker"
                        // value={values.date}
                        onChange={(date) => {
                          setFieldValue("date", date);
                        }}
                      />
                      <TimePicker
                        // value={values.time}
                        onChange={(time) => {
                          setFieldValue("time", time);
                        }}
                      ></TimePicker>
                    </Space>
                  </Col>
                </Row>
                <Row>
                  <Col span={12}>
                    <Form.Item colon={false} name="ageRange" label="Age range">
                      <Select
                        className="select"
                        onChange={handleChange}
                        value={values.agerange}
                      >
                        <Option name="ageRange" value="1-3">
                          1 - 3 (2)
                        </Option>
                        <Option name="ageRange" value="4-6">
                          4 - 6 (4)
                        </Option>
                        <Option name="ageRange" value="7-9">
                          7 - 9 (5)
                        </Option>
                        <Option name="ageRange" value="10-12">
                          10 - 12 (6)
                        </Option>
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={2}>
                    <Form.Item colon={false} name="price">
                      <img src={checkbox}></img>
                    </Form.Item>
                  </Col>
                  <Col span={4}>
                    <Form.Item colon={false} name="price">
                      Paid event
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    <Form.Item colon={false}>
                      <Input
                        prefix="$"
                        placeholder="price"
                        value={values.price}
                        onChange={handleChange}
                        name="price"
                      ></Input>
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <label>Description</label>
                  <Col span={24}>
                    <Form.Item>
                      <Input.TextArea
                        name="description"
                        onChange={handleChange}
                        value={values.description}
                        rows={4}
                        placeholder="You can add some description about the event"
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <div className="stepper-buttons">
                  <Button
                    type="primary"
                    className="stepper-button"
                    size={"large"}
                    onClick={() => {
                      onFinish(values);
                    }}
                  >
                    Create
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
export default CreateEvent;
