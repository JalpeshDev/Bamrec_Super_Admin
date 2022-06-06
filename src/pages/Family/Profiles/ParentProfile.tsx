import React from "react";
import active from "../../../assets/Images/active.svg";
import phone from "../../../assets/Images/Phone.svg";
import payment from "../../../assets/Images/payment.svg";
import deletesvg from "../../../assets/Images/Delete.svg";
import parentsvg from "../../../assets/Images/father.svg";
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
  Divider,
} from "antd";
import { PlusOutlined, DownOutlined } from "@ant-design/icons";
import AppLayout from "../../../components/layout/layout";

const { Title } = Typography;

const { TabPane } = Tabs;
const menu = <Menu />;
const ParentProfile = ({ match }: any) => {
  const location: any = useLocation();
  let data = location.state;
  let profile = JSON.parse(data);
  console.log(profile);
  return (
    <AppLayout>
      <div className="parent-profile-container">
        <div className="parent-profile-header">
          <Row>
            <Col span={19}>
              <Row align="middle">
                <Space>
                  <Col>
                    <Avatar src={parentsvg} size={80}></Avatar>
                  </Col>
                  <Col>
                    <Typography.Title level={4} style={{ margin: "0" }}>
                      {profile?.firstname}
                    </Typography.Title>
                    <span className="subtitle">{profile?.role}</span>
                  </Col>
                </Space>
              </Row>
            </Col>
            <Col span={3}>
              <Button
                type="primary"
                icon={<PlusOutlined />}
                shape="round"
                className="actionButton"
              >
                Action
              </Button>
            </Col>
          </Row>
          <Row justify="end" style={{ marginRight: "45px" }}>
            <Space>
              <a style={{ color: "black" }}>
                <b>status</b>
              </a>
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
        </div>
        <Row gutter={10}>
          <Col span={12}>
            <div className="parent-profile-contact-info">
              <Space direction={"vertical"} size="middle">
                <div className="contact-information">
                  <Space direction={"vertical"} size={"small"}>
                    <b>contact information</b>
                    <span>
                      <img alt="alt" src={phone}></img>
                      <span>{`+ ${profile?.phone.code} ${profile?.phone.phone} `}</span>
                    </span>
                    <span>
                      <img alt="alt" src={envelopSimple}></img>
                      {profile?.email}
                    </span>
                  </Space>
                </div>
              </Space>
            </div>
            <Space direction="vertical" className="parent-profile-payment-box">
              <h5>
                <b>Payment method</b>
              </h5>
              <Card>
                <Row justify="space-between" align="middle">
                  <Col>
                    <img src={payment}></img>
                    XXXX - 4242
                    <h5> Darlene Robertson</h5>
                  </Col>
                  <Col>
                    <img src={deletesvg}></img>
                  </Col>
                </Row>
              </Card>
              <Row justify="center" align="bottom">
                <Button
                  shape="round"
                  size="large"
                  className="outlined-button"
                  icon={<PlusOutlined />}
                >
                  Add credit card
                </Button>
              </Row>
            </Space>
          </Col>
          <Col span={12}>
            <div className="parent-profile-creadits-box">
              <div style={{ paddingBottom: "40px" }}>
                <b>Credits</b>
                <Card>
                  <Row justify="space-between">
                    <Col>Bamrec</Col>
                    <Col>
                      <span className="text-green">$100.00</span>
                    </Col>
                  </Row>
                </Card>
              </div>
              <Space direction="vertical" style={{ width: "100%" }}>
                <b>Payment History</b>
                <Card>
                  <Row justify="space-between">
                    <Col>Bamrec</Col>
                    <Col>
                      <span className="text-pink">$15.00</span>
                    </Col>
                  </Row>
                </Card>
                <Card>
                  <Row justify="space-between">
                    <Col>Bamrec</Col>
                    <Col>
                      <span className="text-pink">$15.00</span>
                    </Col>
                  </Row>
                </Card>
                <Card>
                  <Row justify="space-between">
                    <Col>Bamrec</Col>
                    <Col>
                      <span className="text-pink">$15.00</span>
                    </Col>
                  </Row>
                </Card>
                <Card>
                  <Row justify="space-between">
                    <Col>Bamrec</Col>
                    <Col>
                      <span className="text-pink">$15.00</span>
                    </Col>
                  </Row>
                </Card>
              </Space>
            </div>
          </Col>
        </Row>
      </div>
    </AppLayout>
  );
};
export default ParentProfile;
