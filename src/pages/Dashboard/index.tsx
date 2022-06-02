import React, { useEffect, useState } from "react";
import AppLayout from "../../components/layout/layout";
import { Card, Divider } from "antd";
import { Menu, Dropdown, Button, message, Space, Tooltip, Drawer } from "antd";
import { Tabs } from "antd";
import userIcon from "../../assets/Images/userIcon.svg";
import Card2 from "../../assets/Images/Card2.svg";
import Card3 from "../../assets/Images/Card3.svg";
import Card4 from "../../assets/Images/Card4.svg";
import { Row, Col, Avatar, Typography } from "antd";
import ColumnPlot from "./ColumnGraph/ColumnPlot";
import { DeleteOutlined, EditOutlined, DownOutlined } from "@ant-design/icons";
import { Table } from "antd";
import Barchart from "./Barchart/Barchart";
import Progressbar from "./ProgressBar/Progressbar";
import Capacity from "./Capacity/Capacity";
import Skills from "./Capacity-Skills/Skills";
import Wadge from "../../assets/Images/Wadge.svg";
import { CirclePacking } from "@antv/g2plot";
import Form from "antd/lib/form/Form";
import Checkbox from "antd/lib/checkbox/Checkbox";
import Managewidgets from "./Manage-widgets/Manage-widgets";
import Pendings from "./Pending/Pendings";
import { connect } from "react-redux";
import actions from "../../Redux/Organization/action";
import { useDispatch } from "react-redux";
import OrganizationProfile from "../Oraganazation/OrganizationProfile";
import { Script } from "vm";

const { TabPane } = Tabs;
const menu = (
  <Menu>
    <Menu.Item>
      <p>Active</p>
    </Menu.Item>
    <Menu.Item>
      <p>Pending</p>
    </Menu.Item>
    <Menu.Item>
      <p>Partner</p>
    </Menu.Item>
  </Menu>
);

function callback(key: any) {
  console.log(key);
}

function handleMenuClick() {
  message.info("Click on menu item.");
}
const menu1 = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">1st menu item</Menu.Item>
    <Menu.Item key="2">2nd menu item</Menu.Item>
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

const Dashboard = ({ currentData, organizationData }: any) => {
  const dispatch = useDispatch();
  const [pendingData, setPendingData] = useState([])



  useEffect(() => {
    let pendingOrganizations = organizationData.filter((organization: any) => {
      return organization.status == "pending";
    });
    setPendingData(pendingOrganizations);
  })

  const handleMenuClick = (menuItem: any) => {
    console.log(menuItem.key);
    let updatedOrganizationData = organizationData.map((item: any) => {
      if (item.id === currentData.id) {
        return { ...item, status: menuItem.key };
      } else return item;
    });
    dispatch({
      type: actions.ADD_ORGANIZATION_DATA,
      payload: updatedOrganizationData,
    });
  };
  return (
    <AppLayout>
      <Managewidgets />
      <div className="site-card-wrapper" style={{ padding: "10px" }}>
        <Row gutter={[16, 16]}>
          <Col xl={{ span: 6 }} xs={{ span: 12 }} >
            <Card title="Pending organizations" className="card-box">
              <div className="cricle Aesthetic-light">
                <span>
                  <img src={userIcon} />
                </span>
              </div>
              <div className="card-number">
                <span>{pendingData?.length}</span>
              </div>
              <span className="card-label-text">Manageorgazinations</span>
            </Card>
          </Col>
          <Col xl={{ span: 6 }} xs={{ span: 12 }}>
            <Card title="Events to validate" className="card-box">
              <div className="cricle Aesthetic-dark">
                <span>
                  <img src={Card2} />
                </span>
              </div>
              <div className="card-number">
                <span>3</span>
              </div>
              <span className="card-label-text"> Manage events</span>
            </Card>
          </Col>
          <Col xl={{ span: 6 }} xs={{ span: 12 }}>
            <Card title="Occupancy rate" className="card-box">
              <div className="cricle Lavender-light">
                <span>
                  <img src={Card3} />
                </span>
              </div>
              <div className="card-number">
                <span>30%</span>
              </div>
              <span className="card-label-text">View mentors</span>
            </Card>
          </Col>
          <Col xl={{ span: 6 }} xs={{ span: 12 }}>
            <Card title="Revenue" className="card-box">
              <div className="cricle Aesthetic-dark">
                <span>
                  <img src={Card4} />
                </span>
              </div>
              <div className="card-number">
                <span>$991.44</span>
              </div>
              <span className="card-label-text"> View Revenue</span>
            </Card>
          </Col>
        </Row>
      </div>
      <div style={{ marginTop: 20, padding: 12 }}>
        <Card className="card-table">
          <Row>
            <h2>Organizaions to validate</h2>
          </Row>
          <Row>
            <Pendings
              organizationData={organizationData}
              handleMenu={handleMenuClick}
            />
          </Row>
        </Card>
      </div>
      <div style={{ marginTop: 20 }}>
        <Row gutter={24} style={{ margin: '0' }}>
          <Col lg={{ span: 12 }} xs={{ span: 22 }}>
            <Card style={{ height: "100%" }}>
              <Row>
                <Col span={12}>
                  <h2>Satisfaction score</h2>
                </Col>
                <Col span={12} style={{ textAlign: "right" }}>
                  <Dropdown overlay={menu} className={"mentor-dropdown"}>
                    <Button>
                      All mentors <DownOutlined />
                    </Button>
                  </Dropdown>
                </Col>
              </Row>
              <Row>
                <Col style={{ alignItems: "center", padding: "20px" }}>
                  <Barchart />
                </Col>
              </Row>
            </Card>
          </Col>
          <Col lg={{ span: 12 }} xs={{ span: 22 }}>
            <Card>
              <Row>
                <div className="d-flex justify-between w-100">
                  <h2>Kids</h2>
                  <h2>30</h2>
                </div>
              </Row>
              <Row>
                <Col>
                  <Tabs
                    defaultActiveKey="1"
                    onChange={callback}
                  >
                    <TabPane tab="Gender" key="1" style={{}}>
                      <Row>
                        <Col style={{ alignItems: "center" }}>
                          <ColumnPlot />
                        </Col>
                      </Row>
                    </TabPane>
                    <TabPane tab="Age" key="2">
                      <Row>
                        <Col style={{ alignItems: "center" }}>
                          <Progressbar />
                        </Col>
                      </Row>
                    </TabPane>
                  </Tabs>
                </Col>
              </Row>

            </Card>
          </Col>
        </Row>
        <div style={{ marginTop: 20 }}>
          <Card>
            <Row>
              <Col span={12}>
                <h2>Capacity</h2>
              </Col>
              <Col span={12} style={{ textAlign: "right" }}>
                <Dropdown overlay={menu} className="mentor-dropdown">
                  <Button>
                    Select mentors <DownOutlined />
                  </Button>
                </Dropdown>
              </Col>
            </Row>
            <Tabs defaultActiveKey="1" onChange={callback}>
              <TabPane tab="Mentors" key="1" style={{}}>
                <Row>
                  <Col style={{ width: "1029px", height: 400 }}>
                    <Capacity />
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab="Skills" key="2">
                <Card>
                  <Row>
                    <Col style={{ width: "1029px", height: 400 }}>
                      <Skills />
                    </Col>
                  </Row>
                </Card>
              </TabPane>
            </Tabs>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
};

const mapStateToProps = (state: any) => ({
  organizationData: state.organization.organizationData,
  currentData: state.organization.currentOrganizationData,
});

export default connect(mapStateToProps)(Dashboard);
