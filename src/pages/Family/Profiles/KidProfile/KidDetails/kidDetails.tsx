import {
  Avatar,
  Button,
  Card,
  Col,
  Dropdown,
  Menu,
  Row,
  Space,
  Tabs,
  Typography,
} from "antd";
import Meta from "antd/lib/card/Meta";
import React, { useEffect, useState } from "react";
import AppLayout from "../../../../../components/layout/layout";
import kidPhoto from "../../../../../assets/Images/kid.png";
import { PlusOutlined, DownOutlined } from "@ant-design/icons";
import active from "../../../../../assets/Images/active.svg";
import BasicDetails from "./BasicDetails";
import DemoGauge from "../Gauge";
import { history } from "../../../../../Redux/store";
import soccer from "../../../../../assets/Images/soccer.svg";
import { useLocation } from "react-router-dom";
import moment from "moment";
import { connect } from "react-redux";

const { TabPane } = Tabs;
const { Text, Link, Title } = Typography;

function KidDetails({ familyData }: any) {
  const [family, setFamily] = useState<any>({});
  const [loading, setLoading] = useState(true);
  const location: any = useLocation();
  let data = location.state;
  let profile = JSON.parse(data);

  useEffect(() => {
    let family = familyData.filter((family: any) => {
      return family.id == profile.id;
    });
    setFamily(family[0]);
    setLoading(false);
  }, [familyData]);


  console.log(family);

  const { personalDetails, personality } = family;

  const menu = (
    <Menu>
      <Menu.Item key="event">Check-in to Event </Menu.Item>
      <Menu.Item key="ChangePassword">Change Password</Menu.Item>
      <Menu.Item
        key="Editprofile"
        onClick={() => {
          history.push({
            pathname: "/kid-profile",
            state: data,
          });
        }}
      >
        Edit profile
      </Menu.Item>
      <Menu.Item key="Delete">Delete </Menu.Item>
    </Menu>
  );

  const onChange = (key: string) => {
    console.log(key);
  };

  console.log(profile);

  return (
    <AppLayout>
      <div
        style={{ width: "100%", backgroundColor: "#fff", padding: "40px 40px" }}
      >
        <Row>
          <Col span={19}>
            <Meta
              avatar={<Avatar src={kidPhoto} size={60} />}
              title={personalDetails?.firstname}
              description={`${moment(personalDetails?.dob).format(
                "DD/MMMM/YYYY"
              )} (${moment().diff(
                personalDetails?.dob,
                "years",
                false
              )} years old)`}
            ></Meta>
          </Col>
          <Col span={4}>
            <Dropdown overlay={menu}>
              <Button
                type="primary"
                icon={<PlusOutlined />}
                shape="round"
                size="large"
                className="button-lg"
              >
                Action
              </Button>
            </Dropdown>
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
        <Row gutter={24}>
          <Tabs
            defaultActiveKey="1"
            onChange={onChange}
            className="Tab"
            style={{ width: "100%" }}
          >
            <TabPane tab="Basic Info" key="1">
              <Row gutter={24}>
                <Col span={12}>
                  <BasicDetails personalDetails={personalDetails} personality={personality} />
                </Col>
                <Col span={12}>
                  <Space direction="vertical" style={{ width: "100%" }}>
                    <Row justify="space-between">
                      <Col>
                        <Title level={5}>Rewards</Title>
                        <Space>
                          <Avatar src={soccer}></Avatar>
                          <Avatar></Avatar>
                          <Avatar></Avatar>
                          <Avatar></Avatar>
                          <Avatar></Avatar>
                        </Space>
                      </Col>
                      <Col>
                        <Title level={5} className="text-primary">
                          Give a reward
                        </Title>
                      </Col>
                    </Row>

                    <Row justify="space-between" align="middle">
                      <div>
                        <Title level={5}>Activity</Title>
                      </div>
                      <div>
                        <Title level={5}>Today - 12 Jan 2021</Title>
                      </div>
                    </Row>
                    <DemoGauge />
                  </Space>
                </Col>
              </Row>
            </TabPane>
            <TabPane tab="Authorized Adults" key="2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Events" key="3">
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
        </Row>
      </div>
    </AppLayout>
  );
}
const mapStateToProps = (state: any) => ({
  familyData: state.family.familyData,
});

export default connect(mapStateToProps)(KidDetails);
