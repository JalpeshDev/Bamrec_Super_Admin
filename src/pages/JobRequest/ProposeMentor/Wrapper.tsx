import React, { useState } from "react";
import { Checkbox, Layout, Menu, Divider, Typography, Row, Col } from "antd";
import "antd/dist/antd.css";
import HeaderComponent from "../../../components/Header/HeaderComponent";
import { LeftOutlined } from "@ant-design/icons";
import { useHistory } from "react-router";
import { connect, useDispatch } from "react-redux";
import actions from "../../../Redux/JobRequest/action";

const { Sider } = Layout;
const { Text } = Typography;

const Wrapper: React.FC<{}> = ({ children, mentors }: any) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [checkedList, setCheckedList] = useState<any>([]);

  // const iterate = (skill: any) => {
  //   let filteredData: any = [];
  //   const findSKills = (skill: any) => {
  //     Object.keys(skill).forEach((key) => {
  //       if (skill[key] == true) {
  //         filteredData.push(key);
  //       }
  //       if (typeof skill[key] === "object" && skill[key] !== null) {
  //         findSKills(skill[key]);
  //       }
  //     });
  //   };
  //   findSKills(skill);
  //   return filteredData;
  // };

  // const getSkillCount = mentors.map((mentor: any) => {
  //   return iterate(mentor.Skills);
  // });

  // let counterArray: any = [];
  // getSkillCount.forEach((item: any, index: any) => {
  //   item.forEach((innerItem: any, innerIndex: any) => {
  //     counterArray.push(innerItem);
  //   });
  // });

  // const counts: any = {};
  // counterArray.forEach(function (x: any) {
  //   counts[x] = (counts[x] || 0) + 1;
  // });

  return (
    <Layout>
      <HeaderComponent />
      <Layout id="job-request-layout">
        <Sider className="side-bar">
          <div style={{ marginLeft: "40px" }}>
            <Row>
              <a
                style={{ color: "black",marginBottom:"15px" }}
                onClick={() => history.push("/jobrequest")}
              >
                <LeftOutlined />
                Back
              </a>
            </Row>
            <Checkbox.Group
              onChange={(checkdlist) => {
                dispatch({
                  type: actions.FILTER_AVAILABLE_MENTORS,
                  payload: checkdlist,
                });
              }}
            >
              <Row>
                <b>Educational</b>
              </Row>
              <Row justify="space-between">
                <Checkbox value="maths" className="available-mentor-checkbox">
                  maths
                </Checkbox>
              </Row>
              <Row justify="space-between">
                <Checkbox value="english" className="available-mentor-checkbox">
                  English
                </Checkbox>
              </Row>
              <Row justify="space-between">
                <Checkbox value="science" className="available-mentor-checkbox">
                  Science
                </Checkbox>
              </Row>
              <Row justify="space-between">
                <Checkbox value="history" className="available-mentor-checkbox">
                  History/Social Studie
                </Checkbox>
              </Row>

              <Row>
                <b>Camps</b>
              </Row>
              <Row justify="space-between">
                <Checkbox value="arts" className="available-mentor-checkbox">
                  Arts and Crafts
                </Checkbox>
              </Row>
              <Row justify="space-between">
                <Checkbox value="sports" className="available-mentor-checkbox">
                  Sports
                </Checkbox>
              </Row>
              <Row justify="space-between">
                <Checkbox
                  value="robotics"
                  className="available-mentor-checkbox"
                >
                  Robotics
                </Checkbox>
              </Row>
              <Row justify="space-between">
                <Checkbox value="other" className="available-mentor-checkbox">
                  Other{" "}
                </Checkbox>
              </Row>

              <Row>
                <b>Sports</b>
              </Row>
              <Row justify="space-between">
                <Checkbox value="archery" className="available-mentor-checkbox">
                  Archery
                </Checkbox>
              </Row>
              <Row justify="space-between">
                <Checkbox value="soccer" className="available-mentor-checkbox">
                  Soccer{" "}
                </Checkbox>
              </Row>
              <Row justify="space-between">
                <Checkbox value="" className="available-mentor-checkbox">
                  Robotics{" "}
                </Checkbox>
              </Row>
              <Row justify="space-between">
                <Checkbox
                  value="basketball"
                  className="available-mentor-checkbox"
                >
                  Basketball{" "}
                </Checkbox>
              </Row>
              <Row justify="space-between">
                <Checkbox
                  value="horsebackRiding"
                  className="available-mentor-checkbox"
                >
                  Horseback Riding{" "}
                </Checkbox>
              </Row>
              <Row>
                <b>Spiritual</b>
              </Row>
              <Row justify="space-between">
                <Checkbox
                  value="islamicStudies"
                  className="available-mentor-checkbox"
                >
                  Islamic Studies
                </Checkbox>
              </Row>
              <Row justify="space-between">
                <Checkbox
                  value="quranReading"
                  className="available-mentor-checkbox"
                >
                  Quran Reading
                </Checkbox>
              </Row>
              <Row justify="space-between">
                <Checkbox
                  value="quranMemorization"
                  className="available-mentor-checkbox"
                >
                  Quran Memorization
                </Checkbox>
              </Row>
            </Checkbox.Group>
          </div>
        </Sider>
        {children}
      </Layout>
    </Layout>
  );
};

const mapStateToProps = (state: any) => ({
  jobRequestData: state.jobRequest.jobRequestData,
  mentors: state.jobRequest.filteredAvailableMentors,
});

export default connect(mapStateToProps)(Wrapper);
