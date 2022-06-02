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
  Space,
} from "antd";
import { Layout } from "antd";
type SizeType = Parameters<typeof Form>[0]["size"];

const Skills = ({ match, Visible, onSuccess, handleBack, data }: any) => {


  console.log(data.Skills?.Educational.maths)

  const [Educational, setEducational] = useState({
    maths: data.Skills?.Educational.maths || false,
    english: data.Skills?.Educational.english || false,
    science: data.Skills?.Educational.science || false,
    history: data.Skills?.Educational.history || false,
  });
  const [camps, setCamps] = useState({
    arts: data.Skills?.camps.arts || false,
    sports: data.Skills?.camps.sports || false,
    robotics: data.Skills?.camps.robotics || false,
    other: data.Skills?.camps.other || false,
  });
  const [sports, setSports] = useState({
    archery: data.Skills?.sports.archery || false,
    soccer: data.Skills?.sports.soccer || false,
    basketball: data.Skills?.sports.basketball || false,
    swimming: data.Skills?.sports.swimming || false,
    horsebackRiding: data.Skills?.sports.horsebackRiding || false
  });
  const [spiritual, setSpiritual] = useState({
    islamicStudies: data.Skills?.spiritual.islamicStudies || false,
    quranReading: data.Skills?.spiritual.quranReading || false,
    quranMemorization: data.Skills?.spiritual.quranMemorization || false,

  });



  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <Layout>
      <Form
        name="nest-messages"
        onFinish={onFinish}
        style={{ marginBottom: "10px" }}
        className={'skill-modal'}
      >
        <Space direction="vertical" size="middle" style={{ display: "flex" }}>
          <label><b>Educational</b></label>
          <Row>
            <Button
              value="Maths"
              onClick={() => setEducational({ ...Educational, maths: !Educational.maths })}
              className={Educational.maths ? "selectedButton" : ""}
              shape="round"
            >
              Maths
            </Button>
            <Button
              shape="round"
              onClick={() => setEducational({ ...Educational, english: true })}
              className={Educational.english ? "selectedButton" : ""}
            >
              English
            </Button>
            <Button
              shape="round"
              onClick={() => setEducational({ ...Educational, science: true })}
              className={Educational.science ? "selectedButton" : ""}
            >
              Science
            </Button>
            <Button
              shape="round"
              onClick={() => setEducational({ ...Educational, history: true })}
              className={Educational.history ? "selectedButton" : ""}
            >
              History/Social
            </Button>
          </Row>
          <label><b>Camps</b></label>
          <Row>
            <Button
              shape="round"
              onClick={() => setCamps({ ...camps, arts: true })}
              className={camps.arts ? "selectedButton" : ""}
            >
              Arts and Crafts
            </Button>
            <Button
              shape="round"
              onClick={() => setCamps({ ...camps, sports: true })}
              className={camps.sports ? "selectedButton" : ""}
            >
              Sports
            </Button>
            <Button
              shape="round"
              onClick={() => setCamps({ ...camps, robotics: true })}
              className={camps.robotics ? "selectedButton" : ""}
            >
              Robotics
            </Button>
            <Button
              shape="round"
              onClick={() => setCamps({ ...camps, other: true })}
              className={camps.other ? "selectedButton" : ""}
            >
              other
            </Button>
          </Row>
          <label><b>Sports</b></label>
          <Row>
            <Button
              shape="round"
              onClick={() => setSports({ ...sports, archery: true })}
              className={sports.archery ? "selectedButton" : ""}
            >
              Archery
            </Button>
            <Button
              shape="round"
              onClick={() => setSports({ ...sports, soccer: true })}
              className={sports.soccer ? "selectedButton" : ""}
            >
              Soccer
            </Button>
            <Button
              shape="round"
              onClick={() => setSports({ ...sports, basketball: true })}
              className={sports.basketball ? "selectedButton" : ""}
            >
              Basketball
            </Button>

            <Button
              shape="round"
              onClick={() => setSports({ ...sports, swimming: true })}
              className={sports.swimming ? "selectedButton" : ""}
            >
              Swimming
            </Button>
          </Row>
          <Row>
            <Button
              shape="round"
              onClick={() => setSports({ ...sports, horsebackRiding: true })}
              className={sports.horsebackRiding ? "selectedButton" : ""}
            >
              HorsebackRiding
            </Button>
          </Row>
          <label><b>Spiritual</b></label>
          <Row>
            <Button
              shape="round"
              onClick={() => setSpiritual({ ...spiritual, islamicStudies: true })}
              className={spiritual.islamicStudies ? "selectedButton" : ""}
            >
              Islamic Studies
            </Button>
            <Button
              shape="round"
              onClick={() => setSpiritual({ ...spiritual, quranReading: true })}
              className={spiritual.quranReading ? "selectedButton" : ""}
            >
              Quran Reading
            </Button>
            <Button
              shape="round"
              onClick={() => setSpiritual({ ...spiritual, quranMemorization: true })}
              className={spiritual.quranMemorization ? "selectedButton" : ""}
            >
              Quran Memorization
            </Button>
          </Row>
          <div className="footer-modal">
            <div className="stepper-buttons">
              <h5 className="stepperBackh5" onClick={() => handleBack(data)}>
                Back
              </h5>
              <Button
                type="primary"
                className="stepper-button"
                onClick={() => onSuccess({ ...data, Skills: { Educational, camps, sports, spiritual } })}
              >
                Next
              </Button>
            </div>
          </div>
        </Space>
      </Form>
    </Layout>
  );
};
export default Skills;
