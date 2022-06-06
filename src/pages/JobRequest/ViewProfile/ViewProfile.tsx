import React from "react";
import active from "../../../assets/Images/active.svg";
import phone from "../../../assets/Images/Phone.svg";
import glob from "../../../assets/Images/Globe.svg";
import envelopSimple from "../../../assets/Images/EnvelopeSimple.svg";
import { useLocation } from "react-router-dom";

import {
  Row,
  Card,
  Col,
  Avatar,
  Button,
  Space,
  Typography,
  Tabs,
  Dropdown,
  Menu,
} from "antd";
import org from "../../../assets/Images/mentor.svg";
import facebook from "../../../assets/Images/facebook.svg";
import twitter from "../../../assets/Images/twitter.svg";
import linkedin from "../../../assets/Images/linkedin.svg";
import { PlusOutlined, DownOutlined } from "@ant-design/icons";
import AppLayout from "../ProposedMentors/layout";
import DemoGauge from "./Gauge";
import soccer from "../../../assets/Images/soccer.svg";

const { TabPane } = Tabs;
const menu = <Menu />;
const MentorProfile = ({ match }: any) => {
  const location: any = useLocation();
  let data = location.state;
  console.log(data);
  let profile = JSON.parse(data);
  console.log(profile);

  return (
    <AppLayout>
      <div>
        <Row>
          <Card style={{ width: "100%" }}>
            <Row>
              <Col span={19}>
                <div
                  style={{
                    display: "flex",
                    alignContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Avatar src={org} size={54}></Avatar>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Typography className="org-profile-header-text">
                      {profile ? profile.name : "Organization Name"}
                    </Typography>
                    <h5>{profile?.gender + " " + profile.age}</h5>
                  </div>
                </div>
              </Col>
              <Col span={5}>
                <Button
                  type="primary"
                  icon={<PlusOutlined />}
                  className="org-profile-action-button"
                >
                  Action
                </Button>
              </Col>
            </Row>
            <Row justify="end">
              <Space>
                <Button shape="round">status</Button>
                <Dropdown overlay={menu}>
                  <Button shape="round"  >
                    <Space>
                      <img alt="alt" src={active}></img>
                      Active
                      <DownOutlined />
                    </Space>
                  </Button>
                </Dropdown>
              </Space>
            </Row>
            <Row>
              <Tabs
                defaultActiveKey="1"
                style={{ width: "100%" }}
                className="org-profile"
              >
                <TabPane tab="Basic Info" key="1" style={{ width: "100%" }}>
                  <Row gutter={24}>
                    <Col span={10}>
                      <Card>
                        <Space direction={"vertical"} size={"small"}>
                          <div className="contact-information">
                            <Space direction={"vertical"} size={"small"}>
                              <b>contact information</b>
                              <span>
                                <img alt="alt" src={phone}></img>
                                {profile
                                  ? "+" +
                                    profile?.phone?.code +
                                    " " +
                                    profile?.phone?.phone
                                  : "+1 (305) 123 4567"}
                              </span>
                              <span>
                                <img alt="alt" src={envelopSimple}></img>
                                {profile ? profile.email : "example@gmail.com"}
                              </span>
                              <h4>
                                <b>Skills</b>
                              </h4>
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-around",
                                }}
                              >
                                {profile?.skills.map((skill: any) => {
                                  return (
                                    // <h5 style={{ margin: "2px" }}>{skill}</h5>
                                    <img  style={{borderRadius:"60%",margin:"1px"}} src={soccer}></img>
                                  );
                                })}
                              </div>
                              <div>
                                <h4>
                                  <b>Tutor</b>
                                </h4>
                                <p>{profile?.services}</p>
                              </div>
                            </Space>
                          </div>
                        </Space>
                      </Card>
                    </Col>
                    <Col span={14}>
                      <Card>
                        <div className="org-profile-stat">
                          <Card className="card">
                            <b>$30K</b>
                            <h5>Total Earned</h5>
                          </Card>
                          <Card className="card">
                            <b>2</b>
                            <h5>Jobs worked</h5>
                          </Card>
                          <Card className="card">
                            <b>24h</b>
                            <h5>Response Time</h5>
                          </Card>
                        </div>
                        <Row justify="space-between" style={{ margin: "10px" }}>
                          <b>Activity</b>
                          <h5>
                            <b>Today — 12 Jan 2021</b>
                          </h5>
                        </Row>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <DemoGauge />
                        </div>
                      </Card>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tab="Availability" key="2">
                  Content of Tab Pane 2
                </TabPane>
                <TabPane tab="Events" key="3">
                  Content of Tab Pane 3
                </TabPane>
                <TabPane tab="History" key="3">
                  Content of Tab Pane 3
                </TabPane>
                <TabPane tab="Reviews" key="3">
                  Content of Tab Pane 3
                </TabPane>
              </Tabs>
            </Row>
          </Card>
        </Row>
      </div>
    </AppLayout>
  );
};
export default MentorProfile;
