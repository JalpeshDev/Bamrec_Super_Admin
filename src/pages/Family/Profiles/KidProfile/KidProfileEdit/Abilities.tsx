import { Col, Form, Input, Row, Slider } from "antd";
import React from "react";
import sad from "../../../../../assets/Images/sad.svg";
import happy from "../../../../../assets/Images/happy.svg";
import smile from "../../../../../assets/Images/smile.svg";
import { Formik } from "formik";

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

const Abilities = ({ abilities }: any) => {
  return (
    <div>
      <Formik
        initialValues={abilities}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values, handleChange, setFieldValue }) => {
          return (
            <Form layout="vertical">
              <Form.Item label="Lists of strengths">
                <Input
                  name="strengths"
                  onChange={handleChange}
                  value={values.strengths}
                />
              </Form.Item>
              <Form.Item label="Lists of areas of improvement">
                <Input
                  name="improvement"
                  onChange={handleChange}
                  value={values.improvement}
                />
              </Form.Item>
              <Form.Item label="How to comfort if hurt, scared, worried">
                <Input
                  name="comfort"
                  onChange={handleChange}
                  value={values.comfort}
                />
              </Form.Item>
              <Row>
                <Col span={10}>
                  <label>Reading Level</label>
                </Col>
                <Col span={10}>
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
                <Col span={10}>
                  <label>Child's mood on an average day</label>
                </Col>
                <Col span={10}>
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
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Abilities;
