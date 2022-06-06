import {
  Avatar,
  Button,
  Card,
  Col,
  Form,
  Input,
  Row,
  Space,
  Typography,
} from "antd";
import { FieldArray, Formik } from "formik";
import React, { useState } from "react";
import greenCheckBoxImage from "../../../../../assets/Images/checkGreen.svg";
import deleteSvg from "../../../../../assets/Images/Delete.svg";
import parentSvg from "../../../../../assets/Images/father.svg";
import plusBlue from "../../../../../assets/Images/plusBlue.svg";

const { Text, Title } = Typography;
const AuthorizedAdults = ({ authorizedAdults }: any) => {
  const [adultList, setAdultList] = useState(authorizedAdults);
  return (
    <Formik
      initialValues={{ adultList: adultList }}
      onSubmit={(values: any) => {
        console.log(values.adultList);
        
      }}
    >
      {({ values, handleChange, handleSubmit }) => {
        return (
          <FieldArray name="adultList">
            {({ insert, remove, push }) => (
              <div style={{ padding: "20px" }}>
                <Space align="start">
                  <img src={plusBlue}></img>
                  <Title
                    level={5}
                    style={{ cursor: "pointer" }}
                    className="text-primary"
                    onClick={() => {
                      push({ name: "", email: "", role: "", phone: "" });
                    }}
                  >
                    Add more authorized adult
                  </Title>
                </Space>
                {values.adultList.map((adults: any, index: any) => {
                  return (
                    <Card
                      style={{ marginTop: "25px", marginBottom: "25px" }}
                      key={index}
                    >
                      <Space direction="vertical" style={{ width: "100%" }}>
                        <Row justify="space-between" align="middle">
                          <Col>
                            <Space>
                              <Avatar size={50} src={parentSvg}></Avatar>
                              <img src={greenCheckBoxImage}></img>
                              <Text>Emergency Contact </Text>
                            </Space>
                          </Col>
                          <Col>
                            <div
                              style={{ cursor: "pointer" }}
                              onClick={() => {
                                remove(index);
                              }}
                            >
                              <img src={deleteSvg}></img>
                            </div>
                          </Col>
                        </Row>

                        <div style={{ width: "100%%" }}>
                          <Row justify="space-between">
                            <Col span={11}>
                              <label>Full name</label>
                              <Input
                                name={`adultList[${index}].firstname`}
                                value={values.adultList[index].firstname}
                                onChange={handleChange}
                              ></Input>
                            </Col>
                            <Col span={11}>
                              <label>Phone number</label>
                              <Input
                                name={`adultList[${index}].phone`}
                                value={values.adultList[index].phone?.phone}
                                onChange={handleChange}
                              ></Input>
                            </Col>
                          </Row>
                          <Row justify="space-between">
                            <Col span={11}>
                              <label>Role</label>
                              <Input
                                name={`adultList[${index}].role`}
                                value={values.adultList[index].role}
                                onChange={handleChange}
                              ></Input>
                            </Col>
                            <Col span={11}>
                              <label>Email</label>
                              <Input
                                name={`adultList[${index}].email`}
                                value={values.adultList[index].email}
                                onChange={handleChange}
                              ></Input>
                            </Col>
                          </Row>
                        </div>
                      </Space>
                    </Card>
                  );
                })}
                <Button className="primary" size="large" shape="round" onClick={()=>{
                  console.log(values.adultList)
                }}>
                  Save
                </Button>
              </div>
            )}
          </FieldArray>
        );
      }}
    </Formik>
  );
};

export default AuthorizedAdults;
