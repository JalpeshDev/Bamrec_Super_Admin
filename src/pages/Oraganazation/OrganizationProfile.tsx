import React from "react";
import AppLayout from "../../components/layout/layout";
import active from "../../assets/Images/active.svg";
import phone from "../../assets/Images/Phone.svg";
import glob from "../../assets/Images/Globe.svg";
import envelopSimple from "../../assets/Images/EnvelopeSimple.svg";
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
import org from "../../assets/Images/org.svg";
import DemoPie from "./PieChart";
// import facebook from "../../assets/Images/facebook.svg";
import twitter from "../../assets/Images/twitter.svg";
import linkedin from "../../assets/Images/linkedin.svg";
import { PlusOutlined, DownOutlined } from "@ant-design/icons";

const { TabPane } = Tabs;
const menu = <Menu />;
const OrganizationProfile = ({ match }: any) => {
  const location: any = useLocation();
  let data = location.state;
  let profile = JSON.parse(data);

  return (
    <AppLayout>
      <div>
        <Row>
          <Card style={{ width: "100%" }}>
            <Row>
              <Col span={19}>
                <Avatar src={org} size={54}></Avatar>
                <Typography className="org-profile-header-text">
                  {profile ? profile.organizationName : "Organization Name"}
                </Typography>
                <h5>
                  Refferal type{" "}
                  {profile ? profile.referralType : "date applied"}
                </h5>
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
                  <Button shape="round">
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
                          <div>
                            <b>Admin</b>
                            <div>
                              <Avatar
                                src={org}
                                style={{ marginRight: "5px" }}
                              />
                              {profile ? profile.firstname : "Ronald Richards"}
                            </div>
                          </div>
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
                              <span>
                                <img alt="alt" src={glob}></img>www.bamrec.com
                              </span>
                            </Space>
                          </div>
                          <div>
                            <Space size={"small"}>
                              {/* <img alt="alt" src={facebook}></img> */}
                              <img alt="ALT" src={twitter}></img>
                              <img alt="ALT" src={linkedin}></img>
                            </Space>
                          </div>
                          <div>
                            <Space direction={"vertical"} size={"small"}>
                              <b>Location</b>
                              <span>
                                {profile
                                  ? profile.address
                                  : "Bamrec Headquarters"}
                              </span>
                            </Space>
                          </div>
                          {/* <div>
                            <Space direction={"vertical"} size={"small"}>
                              <b>Location</b>
                              <span>Bamrec Headquarters</span>
                            </Space>
                          </div> */}
                          <div>
                            <Space direction={"vertical"} size={"small"}>
                              <b>Year established</b>
                              <span>2017</span>
                            </Space>
                          </div>
                        </Space>
                      </Card>
                    </Col>
                    <Col span={14}>
                      <Card>
                        <div className="org-profile-stat">
                          <Card className="card">
                            <b>1275</b>
                            <h5>Number of members</h5>
                          </Card>
                          <Card className="card">
                            <b>1275</b>
                            <h5>Hours of engagement</h5>
                          </Card>
                          <Card className="card">
                            <b>1275</b>
                            <h5>Event posted</h5>
                          </Card>
                        </div>
                        <Row justify="space-between">
                          <b>Statistic</b>
                          <div>
                            <Space>
                              <span className="primary-color">Revenue</span>
                              <span className="">Expenses</span>
                            </Space>
                          </div>
                        </Row>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "60%",
                          }}
                        >
                          <DemoPie />
                        </div>
                        {/* <Row >
                          <Col span={4}>09:00 - 1:00</Col>
                          <Col span={4}>$617</Col>
                          <Col span={4}>lunch</Col>
                          <Col span={4}>$366</Col>
                        </Row>
                        <Row>
                          <Col span={4}>09:00 - 3:00</Col>
                          <Col span={4}>$318</Col>
                          <Col span={4}>Lunch</Col>
                          <Col span={4}>$845</Col>
                        </Row>
                        <Row>
                          <Col span={4}>GIS 09:00 - 1:00</Col>
                          <Col span={4}>$414</Col>
                          <Col span={4}>Extended Care</Col>
                          <Col span={4}>$402</Col>
                        </Row> */}
                      </Card>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tab="Events" key="2">
                  Content of Tab Pane 2
                </TabPane>
                <TabPane tab="Reviews (2)" key="3">
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
export default OrganizationProfile;
