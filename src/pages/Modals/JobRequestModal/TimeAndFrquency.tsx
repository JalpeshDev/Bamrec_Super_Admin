import React, { useState, useRef, useEffect } from "react";
import {
  Form,
  Button,
  Select,
  Dropdown,
  Space,
  Menu,
  Row,
  InputNumber,
  Slider,
  Col,
  DatePicker,
  TimePicker,
} from "antd";
import { Layout } from "antd";
import "antd-country-phone-input/dist/index.css";
import { Field, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { DownOutlined } from "@ant-design/icons";
import TextArea from "antd/lib/input/TextArea";
import moment from "moment";
import { time } from "console";

const TimeAndFrequency = ({ onSuccess, prev, data }: any) => {
  const dispatch = useDispatch();
  const [sliderValue, setSliderValue] = useState(10);
  const [timesPerWeek, setTimesPerWeek] = useState("");

  const [oneTimeData, setOneTimeData] = useState({
    type: "One-Time",
    date: "",
    startTime: "",
    endTime: "",
    budget: 0,
  });

  const [flexibleData, setFlexibleData] = useState({
    type: "Flexible",
    description: "",
    budget: 0,
  });
  useEffect(() => {
    setTimesPerWeek(data?.timeFrequencyData?.type || "");
    setOneTimeData(data?.timeFrequencyData || oneTimeData);
    setSliderValue(data?.timeFrequencyData?.budget || 0)
  }, []);

  const onSubmit = () => {
    if (timesPerWeek === "One-Time") {
      onSuccess({
        ...data,
        timeFrequencyData: { ...oneTimeData, budget: sliderValue },
      });
    } else if (timesPerWeek === "Flexible") {
      onSuccess({
        ...data,
        timeFrequencyData: { ...flexibleData, budget: sliderValue },
      });
    }
  };

  return (
    <>
      <Layout>
        <Form layout="vertical">
          <Space direction="vertical" style={{ width: "100%" }}>
            <h2>
              <b>Time and Frequency</b>
            </h2>
            <h3>How often do you need service?</h3>
            <Row justify="space-between">
              <Button
                shape="round"
                className={
                  timesPerWeek === "One-Time" ? "activePrimary" : "secondary"
                }
                onClick={() => setTimesPerWeek("One-Time")}
              >
                One time
              </Button>
              <Button
                shape="round"
                className={
                  timesPerWeek === "Flexible" ? "activePrimary" : "secondary"
                }
                onClick={() => setTimesPerWeek("Flexible")}
              >
                Flexible
              </Button>
              <Button
                shape="round"
                className={
                  timesPerWeek === "Recurring" ? "activePrimary" : "secondary"
                }
                onClick={() => setTimesPerWeek("Recurring")}
              >
                Recurring
              </Button>
            </Row>
            {timesPerWeek === "One-Time" && (
              <div className="onetime">
                <DatePicker
                  placeholder="Date"
                  className="datepicker"
                  value={moment(oneTimeData?.date || Date.now())}
                  onChange={(date, dateString) => {
                    setOneTimeData({ ...oneTimeData, date: dateString });
                  }}
                />
                <TimePicker
                  placeholder="Start Time"
                  className="datepicker"
                  value={moment(
                    oneTimeData?.startTime || "00:00:00",
                    "HH:mm a"
                  )}
                  onChange={(time, timeString) => {
                    setOneTimeData({ ...oneTimeData, startTime: timeString });
                  }}
                />
                <TimePicker
                  placeholder="End Time"
                  className="datepicker"
                  value={moment(oneTimeData?.endTime || "00:00:00", "HH:mm a")}
                  onChange={(time4, timeString) => {
                    setOneTimeData({ ...oneTimeData, endTime: timeString });
                  }}
                />
              </div>
            )}
            {timesPerWeek === "Flexible" && (
              <div className="flexible">
                <TextArea
                  placeholder="Tell us more about your restrictions"
                  onChange={(e) => {
                    setFlexibleData({
                      ...flexibleData,
                      description: e.target.value,
                    });
                  }}
                ></TextArea>
              </div>
            )}
            {timesPerWeek === "Recurring" && <div></div>}
            <div>
              <h3>What is your budget per session (1 hour)</h3>
              <Row>
                <Col span={12}>
                  <Slider
                    onChange={(value: any) => setSliderValue(value)}
                    min={10}
                    max={100}
                    value={sliderValue}
                  />
                </Col>
                <Col span={4}>
                  <InputNumber
                    min={"$ " + 10}
                    max={"$ " + 200}
                    value={sliderValue || "$ " + sliderValue}
                    style={{ margin: "0 16px" }}
                  />
                </Col>
              </Row>
            </div>
            <Row justify="space-between">
              <h5 className="stepperBackh5" onClick={prev}>
                Back
              </h5>
              <Button
                type="primary"
                className="stepper-button"
                size="large"
                onClick={() => {
                  onSubmit();
                }}
              >
                Next
              </Button>
            </Row>
          </Space>
        </Form>
      </Layout>
    </>
  );
};
export default TimeAndFrequency;
